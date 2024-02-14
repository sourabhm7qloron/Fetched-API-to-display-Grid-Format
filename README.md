# Fetched-API-to-display-Grid-Format
https://fakestoreapi.com/products

**index.html**

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Product Table</title>
<link rel="stylesheet" href="index.css">
<script src="index.js"></script>

</head>
<body>
<table id="productTable">
    <thead>
        <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>

</body>
</html>

**index.css**

    table {
        border-collapse: collapse;
        width: 100%;
    }
    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: #f2f2f2;
    }
    img {
        max-width: 100px;
        height: auto;
        transition: transform 0.3s ease;
    }
    td:hover img {
        transform: scale(1.1);
    }
    tr:hover {
        background-color: #f5f5f5;
    }
    tr:hover td {
        color: #333;
    }


**index.js**

    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        const productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];
        data.forEach((product, index) => {
            const row = productTable.insertRow();
            const srNoCell = row.insertCell(0);
            const nameCell = row.insertCell(1);
            const descriptionCell = row.insertCell(2);
            const priceCell = row.insertCell(3);
            const imageCell = row.insertCell(4);

            srNoCell.textContent = index + 1;
            nameCell.textContent = product.title;
            descriptionCell.textContent = product.description;
            priceCell.textContent = `$${product.price}`;
            imageCell.innerHTML = `<img src="${product.image}" alt="${product.title}">`;
        });
    })
    .catch(error => console.error('Error fetching data:', error));
