CREATE TABLE IF NOT EXISTS commodities(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    price decimal(14,2),
    img blob,
    amount decimal(14,2)
);

select * from commodities;
