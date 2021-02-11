CREATE TABLE IF NOT EXISTS commodities(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    price decimal(14,2)
);

INSERT or IGNORE INTO commodities(id, name, price) VALUES (1, 'Ayam Bakar', 15000);
INSERT or IGNORE INTO commodities(id, name, price) VALUES (2, 'Jonas Brothers', 17500);
INSERT or IGNORE INTO commodities(id, name, price) VALUES (3, 'Life Is Good', 18000);
INSERT or IGNORE INTO commodities(id, name, price) VALUES (4, 'Lauv', 15500);
INSERT or IGNORE INTO commodities(id, name, price) VALUES (5, 'Bakso Kotakz', 21000);
INSERT or IGNORE INTO commodities(id, name, price) VALUES (6, 'Ayam Tepung', 19500);
INSERT or IGNORE INTO commodities(id, name, price) VALUES (7, 'Ayam Goreng', 16000);
INSERT or IGNORE INTO commodities(id, name, price) VALUES (8, 'Iga Barbeque', 14500);