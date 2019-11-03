-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-11-03 11:58:50.075

-- tables
-- Table: buildings
CREATE TABLE buildings (
    id INT NOT NULL,
    name TEXT NOT NULL,
    latitude DOUBLE NOT NULL,
    longitude DOUBLE NOT NULL,
    campusID INT NOT NULL,
    CONSTRAINT buildings_pk PRIMARY KEY (id)
);

CREATE INDEX building_name ON buildings (name);

CREATE INDEX lat_idx ON buildings (latitude);

CREATE INDEX long_idx ON buildings (longitude);

-- Table: campuses
CREATE TABLE campuses (
    id INT NOT NULL,
    name TEXT NOT NULL,
    CONSTRAINT campuses_pk PRIMARY KEY (id)
);

CREATE INDEX campus_name ON campuses (name);

-- Table: meters
CREATE TABLE meters (
    id INT NOT NULL,
    name TEXT NOT NULL,
    buildingID INT NOT NULL,
    unitID INT NOT NULL,
    resourceID INT NOT NULL,
    CONSTRAINT meters_pk PRIMARY KEY (id)
);

CREATE INDEX meter_name ON meters (name);

-- Table: readings
CREATE TABLE readings (
    id INT NOT NULL,
    meterID INT NOT NULL,
    value DOUBLE NOT NULL,
    time TEXT NOT NULL,
    CONSTRAINT readings_pk PRIMARY KEY (id)
);

CREATE INDEX time_idx ON readings (time);

-- Table: resources
CREATE TABLE resources (
    id INT NOT NULL,
    name TEXT NOT NULL,
    CONSTRAINT resources_pk PRIMARY KEY (id)
);

CREATE INDEX resource_name ON resources (name);

-- Table: units
CREATE TABLE units (
    id INT NOT NULL,
    unit TEXT NOT NULL,
    CONSTRAINT units_pk PRIMARY KEY (id)
);

-- foreign keys
-- Reference: buildings_campuses (table: buildings)
ALTER TABLE buildings ADD CONSTRAINT buildings_campuses FOREIGN KEY buildings_campuses (campusID)
    REFERENCES campuses (id);

-- Reference: metadata_resources (table: meters)
ALTER TABLE meters ADD CONSTRAINT metadata_resources FOREIGN KEY metadata_resources (resourceID)
    REFERENCES resources (id);

-- Reference: meters_buildings (table: meters)
ALTER TABLE meters ADD CONSTRAINT meters_buildings FOREIGN KEY meters_buildings (buildingID)
    REFERENCES buildings (id);

-- Reference: meters_units (table: meters)
ALTER TABLE meters ADD CONSTRAINT meters_units FOREIGN KEY meters_units (unitID)
    REFERENCES units (id);

-- Reference: readings_meters (table: readings)
ALTER TABLE readings ADD CONSTRAINT readings_meters FOREIGN KEY readings_meters (meterID)
    REFERENCES meters (id);

-- End of file.

