with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

import re
# Find all React component functions in the script block
# Typically: function Navbar, function Hero, etc.
components = re.findall(r"function\s+(\w+)\s*\(", content)
print("React Components:", components)
