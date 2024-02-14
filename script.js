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
