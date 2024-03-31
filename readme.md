---

# Dynamic Delivery API

The Dynamic Delivery API is designed to provide functionalities related to organization management, item management, pricing structure management, and dynamic price calculation for different zones, items, and organizations.

## Endpoints

### Organization

- *GET /organization*
  - Summary: Lists all organizations.
  - Response: List of organizations or server error.
- *POST /organization*
  - Summary: Create a new organization.
  - Parameters:
    - name: The organization name (required).
  - Response: Organization saved, organization already exists, or server error.
- *PUT /organization*
  - Summary: Update an organization's name.
  - Parameters:
    - id: The organization ID (required).
    - name: The new organization name (required).
  - Response: Organization updated, missing required parameters, or server error.
- *GET /organization/{name}*
  - Summary: Get organization ID by its name.
  - Parameters:
    - name: The organization name (required).
  - Response: Organization ID or organization not found.

### Item

- *GET /item*
  - Summary: Lists all items.
  - Response: List of items or server error.
- *POST /item*
  - Summary: Create a new item.
  - Request Body:
    json
    {
      "type": "perishable",
      "description": "Item details"
    }
    
  - Response: Item saved, item already exists, missing required body, or server error.
- *PUT /item*
  - Summary: Update an item's type or description.
  - Parameters:
    - id: The item ID (required).
    - type: The new item type (optional).
    - description: The new item description (optional).
  - Response: Item updated, missing required parameters, or server error.
- *GET /item/{id}*
  - Summary: Get an item by its ID.
  - Parameters:
    - id: The item ID (required).
  - Response: The item or item not found.

### Pricing

- *GET /pricing*
  - Summary: Lists all pricing structures.
  - Response: List of pricing structures or server error.
- *POST /pricing*
  - Summary: Create a new pricing structure.
  - Request Body:
    json
    {
      "organization_id": 1,
      "item_id": 1,
      "zone": "central",
      "base_distance_in_km": "5",
      "km_price": "1.5",
      "fix_price": "10"
    }
    
  - Response: Pricing structure saved, pricing structure already exists, missing required body, or server error.
- *GET /pricing/{organization_id}*
  - Summary: Get pricing structure by organization ID.
  - Parameters:
    - organization_id: The organization ID (required).
  - Response: The pricing structure or organization ID not found.
- *PUT /pricing/{id}*
  - Summary: Update pricing structure by its ID.
  - Parameters:
    - id: The pricing ID (required).
    - Query parameters for updating pricing details.
  - Response: Pricing structure updated, missing required parameters, or server error.

### Calculate Price

- *GET /calculate*
  - Summary: Calculate price for given parameters.
  - Parameters:
    - organization_id: The organization ID (optional).
    - item_type: The item type (optional).
    - zone: The delivery zone (optional).
    - total_distance: The total distance (optional).
  - Response: Dynamic price or pricing structure not found for given parameters.

## Installation and Usage

1. Clone the repository.
2. Install dependencies using npm install.
3. Start the server using npm start.
4. Use the provided endpoints to interact with the API.

---# dynamic-delivery
