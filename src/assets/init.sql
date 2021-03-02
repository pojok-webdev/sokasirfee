CREATE TABLE IF NOT EXISTS commodities(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    price decimal(14,2),
    img blob,
    amount decimal(14,2)
);

INSERT or IGNORE INTO commodities(id, name, price,amount,img) VALUES (1, 'Ayam Bakar Lezaa', 15000,1,'../../assets/catalog/ayam-bakar-lezaa.png');
INSERT or IGNORE INTO commodities(id, name, price,amount,img) VALUES (2, 'Ayam Goreng Merdeka', 17500,1,'../../assets/catalog/ayam-goreng-merdeka.png');
INSERT or IGNORE INTO commodities(id, name, price,amount,img) VALUES (3, 'Ayam Krispy Merdeka', 18000,2,'../../assets/catalog/ayam-krispy-merdeka.png');
INSERT or IGNORE INTO commodities(id, name, price,amount,img) VALUES (4, 'Ayam Merdeka', 15500,3,'../../assets/catalog/ayam-merdeka.png');
INSERT or IGNORE INTO commodities(id, name, price,amount,img) VALUES (5, 'Ayam Panggang', 21000,4,'../../assets/catalog/ayam-panggang.png');
INSERT or IGNORE INTO commodities(id, name, price,amount,img) VALUES (6, 'Iga bakar Merdeka', 19500,5,'../../assets/catalog/iga-bakar-merdeka.png');
INSERT or IGNORE INTO commodities(id, name, price,amount,img) VALUES (7, 'Puding Merdeka', 16000,5,'../../assets/catalog/puding-merdeka.png');
INSERT or IGNORE INTO commodities(id, name, price,amount,img) VALUES (8, 'Salad Merdeka', 14500,5,'../../assets/catalog/salad-merdeka.png');