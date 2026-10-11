"""UPI ID (VPA) validator with a handle -> app/bank lookup. Offline format check. MIT licence."""
import json
import re
from pathlib import Path

HANDLES = json.loads((Path(__file__).parent / "handles.json").read_text(encoding="utf-8"))
RE = re.compile(r"^[a-zA-Z0-9][a-zA-Z0-9.\-_]{1,255}@[a-zA-Z][a-zA-Z0-9]{1,63}$")


def validate_upi_id(value: str) -> dict:
    vid = str(value or "").strip()
    res = {"upi_id": vid, "valid": bool(RE.match(vid)), "errors": []}
    if "@" not in vid:
        res["errors"].append("A UPI ID has an @, like name@okhdfcbank")
        res["valid"] = False
        return res
    name, handle = vid.rsplit("@", 1)
    res["name"], res["handle"] = name, handle.lower()
    info = HANDLES.get(res["handle"])
    res["app"], res["bank"] = (info["app"], info["bank"]) if info else (None, None)
    res["known_handle"] = bool(info)
    res["looks_like_mobile"] = bool(re.fullmatch(r"\d{10}", name))
    if not res["valid"] and not res["errors"]:
        res["errors"].append("Not a valid UPI ID format")
    return res


if __name__ == "__main__":
    import sys
    for a in sys.argv[1:] or ["shop@okhdfcbank"]:
        print(validate_upi_id(a))
