-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-11-03 11:58:50.075

-- tables
-- Table: buildings
CREATE TABLE IF NOT EXISTS buildings (
    id INTEGER NOT NULL PRIMARY KEY,
    label TEXT NOT NULL UNIQUE,
    latitude DOUBLE NOT NULL,
    longitude DOUBLE NOT NULL,
    campusID INT NOT NULL,
    FOREIGN KEY(campusID) REFERENCES campuses(id)
);

CREATE INDEX building_name ON buildings (label);

CREATE INDEX lat_idx ON buildings (latitude);

CREATE INDEX long_idx ON buildings (longitude);

-- Table: campuses
CREATE TABLE IF NOT EXISTS campuses (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    label TEXT NOT NULL UNIQUE
);

CREATE INDEX campus_name ON campuses (label);

-- Table: meters
CREATE TABLE IF NOT EXISTS meters (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    label TEXT NOT NULL UNIQUE,
    buildingID INT NOT NULL,
    unitID INT NOT NULL,
    resourceID INT NOT NULL,
    FOREIGN KEY(resourceID) REFERENCES resources(id),
    FOREIGN KEY(buildingID) REFERENCES buildings(id),
    FOREIGN KEY(unitID) REFERENCES units(id)
);

CREATE INDEX meter_name ON meters (label);

-- Table: readings
CREATE TABLE IF NOT EXISTS readings (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    meterID INT NOT NULL,
    measurement DOUBLE NOT NULL,
    created DATETIME NOT NULL,
    FOREIGN KEY(meterID) REFERENCES meters(id)
);

CREATE INDEX time_idx ON readings (created);

-- Table: resources
CREATE TABLE IF NOT EXISTS resources (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    label TEXT NOT NULL UNIQUE
);

CREATE INDEX resource_name ON resources (label);

-- Table: units
CREATE TABLE IF NOT EXISTS units (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    unit TEXT NOT NULL UNIQUE
);

-- foreign keys
-- Reference: buildings_campuses (table: buildings)
--ALTER TABLE buildings ADD CONSTRAINT buildings_campuses FOREIGN KEY buildings_campuses (campusID)
--    REFERENCES campuses (id);

-- Reference: metadata_resources (table: meters)
-- ALTER TABLE meters ADD CONSTRAINT metadata_resources FOREIGN KEY metadata_resources (resourceID)
--     REFERENCES resources (id);

-- Reference: meters_buildings (table: meters)
-- ALTER TABLE meters ADD CONSTRAINT meters_buildings FOREIGN KEY meters_buildings (buildingID)
--     REFERENCES buildings (id);

-- Reference: meters_units (table: meters)
-- ALTER TABLE meters ADD CONSTRAINT meters_units FOREIGN KEY meters_units (unitID)
--     REFERENCES units (id);

-- Reference: readings_meters (table: readings)
-- ALTER TABLE readings ADD CONSTRAINT readings_meters FOREIGN KEY readings_meters (meterID)
--     REFERENCES meters (id);

-- End of file.

