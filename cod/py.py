import requests
from bs4 import BeautifulSoup

def decode_secret_message(doc_url):
    # Download the document
    response = requests.get(doc_url)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")

    # Find the first table in the document
    table = soup.find("table")
    if not table:
        print("No table found in the document.")
        return

    # Extract character positions from the table
    positions = []
    for row in table.find_all("tr"):
        cells = row.find_all(["td", "th"])
        # Skip header row
        if cells and cells[0].get_text().strip() == "x-coordinate":
            continue
        if len(cells) < 3:
            continue
        try:
            x = int(cells[0].get_text())
            char = cells[1].get_text().strip()
            y = int(cells[2].get_text())
        except ValueError:
            continue
        positions.append((x, y, char))

    if not positions:
        print("No character data found.")
        return

    # Determine grid size
    max_x = max(x for x, y, _ in positions)
    max_y = max(y for x, y, _ in positions)

    # Build the grid
    grid = [[' ' for _ in range(max_x + 1)] for _ in range(max_y + 1)]
    for x, y, char in positions:
        grid[y][x] = char

    # Print the grid
    for row in grid:
        print(''.join(row))

# Example usage
decode_secret_message("https://docs.google.com/document/d/e/2PACX-1vRPzbNQcx5UriHSbZ-9vmsTow_R6RRe7eyAU60xIF9Dlz-vaHiHNO2TKgDi7jy4ZpTpNqM7EvEcfr_p/pub")