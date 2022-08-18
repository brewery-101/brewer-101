DROP TABLE IF EXISTS "friend";
DROP TABLE IF EXISTS "checkIn";
DROP TABLE IF EXISTS "brewery";
DROP TABLE IF EXISTS "profile";


CREATE TABLE IF NOT EXISTS "profile"(
    "profileId" uuid NOT NULL,
    "profileActivationToken" CHAR(97),
    "profileAvatarUrl" VARCHAR(255),
    "profileEmail" VARCHAR(128) NOT NULL,
    "profileHash" CHAR(97) NOT NULL,
    "profileName" VARCHAR(32),
    UNIQUE ("profileEmail"),
    UNIQUE ("profileName"),
    PRIMARY KEY ("profileId")
);



CREATE TABLE IF NOT EXISTS "brewery"(
    "breweryId" uuid NOT NULL ,
    "breweryAddress" VARCHAR(32) NOT NULL,
    "breweryCity" VARCHAR(32) NOT NULL,
    "breweryLat" REAL,
    "breweryLng" REAL,
    "breweryName" VARCHAR(32) NOT NULL,
    "breweryPictureUrl" VARCHAR(255),
    "breweryState" CHAR(2) NOT NULL,
    "breweryWebsite" VARCHAR(255),
    "breweryZipCode" CHAR(5) NOT NULL,
    UNIQUE ("breweryName"),
    UNIQUE ("breweryWebsite"),
    PRIMARY KEY ("breweryId")

);


CREATE TABLE IF NOT EXISTS "checkIn"(
    "checkInId" uuid NOT NULL ,
    "checkInProfileId" uuid NOT NULL,
    "checkInBreweryId" uuid NOT NULL,
    "checkInDateTime" timestamptz NOT NULL,
    "checkInEndTime" timestamptz NOT NULL,
    "checkInIsActive" BOOLEAN,
    "checkInWhatChaDrinkin" VARCHAR(32),
    PRIMARY KEY ("checkInId"),
    FOREIGN KEY ("checkInProfileId") REFERENCES "profile"("profileId"),
    FOREIGN KEY ("checkInBreweryId") REFERENCES "brewery"("breweryId")

);
CREATE INDEX ON "checkIn"("checkInProfileId");
CREATE INDEX ON "checkIn"("checkInBreweryId");

CREATE TABLE IF NOT EXISTS "friend"(
    "friendRequesteeProfileId" uuid NOT NULL ,
    "friendRequestorProfileId" uuid NOT NULL ,
    "friendRequestApproved" BOOLEAN,
    FOREIGN KEY ("friendRequesteeProfileId") REFERENCES "profile"("profileId"),
    FOREIGN KEY ("friendRequestorProfileId") REFERENCES "profile"("profileId")
);

CREATE INDEX ON "friend"("friendRequesteeProfileId");
CREATE INDEX ON "friend"("friendRequestorProfileId");