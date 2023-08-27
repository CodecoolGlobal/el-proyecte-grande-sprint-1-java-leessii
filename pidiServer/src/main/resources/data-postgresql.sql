INSERT INTO adoption_status (status)
SELECT 'Available'
WHERE NOT EXISTS (SELECT 1 FROM adoption_status WHERE status = 'Available');

INSERT INTO adoption_status (status)
SELECT 'In Progress'
WHERE NOT EXISTS (SELECT 1 FROM adoption_status WHERE status = 'In Progress');

INSERT INTO adoption_status (status)
SELECT 'Not Available'
WHERE NOT EXISTS (SELECT 1 FROM adoption_status WHERE status = 'Not Available');

INSERT INTO adoption_status (status)
SELECT 'Adoppted'
WHERE NOT EXISTS (SELECT 1 FROM adoption_status WHERE status = 'Adoppted');

