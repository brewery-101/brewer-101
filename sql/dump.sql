--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Drop databases (except postgres and template1)
--

DROP DATABASE project;




--
-- Drop roles
--

DROP ROLE username;


--
-- Roles
--

CREATE ROLE username;
ALTER ROLE username WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:IAHewGPViOkyJDy2CVD0dQ==$cd+DtZims1wFBcPDH3W2aVCzcpqw16sHbtPXGMGG4/M=:YQDhPS7IrhjepSaZLh+EEAj0Iw2diUVAQ44SovbJUiQ=';






--
-- Databases
--

--
-- Database "template1" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

UPDATE pg_catalog.pg_database SET datistemplate = false WHERE datname = 'template1';
DROP DATABASE template1;
--
-- Name: template1; Type: DATABASE; Schema: -; Owner: username
--

CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE template1 OWNER TO username;

\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: username
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- Name: template1; Type: DATABASE PROPERTIES; Schema: -; Owner: username
--

ALTER DATABASE template1 IS_TEMPLATE = true;


\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: ACL; Schema: -; Owner: username
--

REVOKE CONNECT,TEMPORARY ON DATABASE template1 FROM PUBLIC;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;


--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE postgres;
--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: username
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO username;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: username
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- PostgreSQL database dump complete
--

--
-- Database "project" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: project; Type: DATABASE; Schema: -; Owner: username
--

CREATE DATABASE project WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE project OWNER TO username;

\connect project

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: brewery; Type: TABLE; Schema: public; Owner: username
--

CREATE TABLE public.brewery (
    "breweryId" uuid NOT NULL,
    "breweryAddress" character varying(128) NOT NULL,
    "breweryCity" character varying(32) NOT NULL,
    "breweryLat" real NOT NULL,
    "breweryLng" real NOT NULL,
    "breweryName" character varying(128) NOT NULL,
    "breweryPictureUrl" character varying(255),
    "breweryState" character(2) NOT NULL,
    "breweryWebsite" character varying(255),
    "breweryZipCode" character(5) NOT NULL
);


ALTER TABLE public.brewery OWNER TO username;

--
-- Name: checkIn; Type: TABLE; Schema: public; Owner: username
--

CREATE TABLE public."checkIn" (
    "checkInId" uuid NOT NULL,
    "checkInProfileId" uuid NOT NULL,
    "checkInBreweryId" uuid NOT NULL,
    "checkInDateTime" timestamp with time zone NOT NULL,
    "checkInEndTime" timestamp with time zone NOT NULL,
    "checkInIsActive" boolean,
    "checkInWhatChaDrinkin" character varying(32)
);


ALTER TABLE public."checkIn" OWNER TO username;

--
-- Name: friend; Type: TABLE; Schema: public; Owner: username
--

CREATE TABLE public.friend (
    "friendRequesteeProfileId" uuid NOT NULL,
    "friendRequestorProfileId" uuid NOT NULL,
    "friendRequestApproved" boolean
);


ALTER TABLE public.friend OWNER TO username;

--
-- Name: profile; Type: TABLE; Schema: public; Owner: username
--

CREATE TABLE public.profile (
    "profileId" uuid NOT NULL,
    "profileActivationToken" character(32),
    "profileAvatarUrl" character varying(255),
    "profileEmail" character varying(128) NOT NULL,
    "profileHash" character(97) NOT NULL,
    "profileName" character varying(32)
);


ALTER TABLE public.profile OWNER TO username;

--
-- Data for Name: brewery; Type: TABLE DATA; Schema: public; Owner: username
--

COPY public.brewery ("breweryId", "breweryAddress", "breweryCity", "breweryLat", "breweryLng", "breweryName", "breweryPictureUrl", "breweryState", "breweryWebsite", "breweryZipCode") FROM stdin;
64f656e1-8a6f-41c3-a5bd-4f277ff88442	6601 Uptown Blvd NE Ste B	Albuquerque	35.104057	-106.57123	Alien Brewpub	come back to and fix	NM	http://www.abqbrewpub.com	87110
826e03b8-4c33-4aae-bb92-5f7bb096625b	3118 Central Ave SE	Albuquerque	35.080303	-106.61004	Bistronomy B2B Craft Brewery	come back to and fix	NM	http://www.bistronomyb2b.com	87106
fbb951af-3931-469a-bdb9-c1e5e5680360	601 Gold Ave SW	Albuquerque	35.08416	-106.65441	Boese Brothers Brewing	come back to and fix	NM	http://www.boesebrothers.com	87102
3504b463-7d24-47d2-af90-a5fc64ba5aae	9801 Acoma Rd SE	Albuquerque	35.07089	-106.5391	Bombs Away Beer Company	come back to and fix	NM	http://www.bombsawaybeer.com	87123
27900591-a4c1-4fda-8ca4-d9827572fe73	8900 San Mateo Blvd NE Ste I	Albuquerque	35.18722	-106.58619	Bosque Brewing Co	come back to and fix	NM	http://www.bosquebrewingco.com	87113
46ff3451-2ddd-4573-8b27-2907d474e2a7	608 McKnight Ave NW	Albuquerque	35.105354	-106.65215	Bow and Arrow Brewing Co.	come back to and fix	NM	http://www.bowandarrowbrewing.com	87102
7cdc2647-876b-4bc7-bfb3-6b97c9a02d12	10200 Corrales Rd NW	Albuquerque	35.20306	-106.64579	Boxing Bear Brewing Company	come back to and fix	NM	http://www.boxingbearbrewing.com	87114
91a36af1-c25a-45e8-b2d7-9c2d2c8369cd	2921 Stanford Dr NE	Albuquerque	35.114094	-106.61779	Broken Trail Brewery & Distillery	come back to and fix	NM	http://www.brokentrailspirits.com	87107
5067b958-d592-4630-a493-c21308d24756	2381 Aztec Rd NE	Albuquerque	35.120407	-106.61788	Canteen Brewhouse	come back to and fix	NM	http://www.canteenbrewhouse.com	87107
7ec2a931-996a-41e7-8cf9-445fc4e85f4d	2809 Broadbent Pkwy NE, Suite D C/O The Craftroom	Albuquerque	35.113003	-106.62869	Desert Valley Brewing Co.	come back to and fix	NM	\N	87107
da2f7b96-33f4-4884-a1f9-3f7d884412dc	1501 1st St NW	Albuquerque	35.097702	-106.64557	Dialogue Brewing	come back to and fix	NM	http://www.dialoguebrewing.com	87102
e3862b06-ff30-4d84-affb-ffbed6bf9fe7	3236 La Orilla Rd NW	Albuquerque	35.159363	-106.68159	Flix Brewhouse	come back to and fix	NM	\N	87120
0411afce-8128-4cdd-a527-00f8d537c217	529 Adams St NE	Albuquerque	35.0867	-106.5945	High and Dry Brewing	come back to and fix	NM	http://www.highanddrybrewing.com	87108
84da595e-ea88-4568-b257-e70a1456fc5f	3507 Central Ave NE	Albuquerque	35.08013	-106.605316	Hops Brewery	come back to and fix	NM	\N	87106
0eb648b3-f2da-405d-88dc-b74d5f7c6c6a	3222 Central Ave SE	Albuquerque	35.07996	-106.60865	Kellys Brewpub	come back to and fix	NM	http://www.kellysbrewpub.com	87106
9895a1f9-84b4-41bf-a4bd-0315fe2374e2	4814 Hardware Dr NE	Albuquerque	35.13644	-106.58947	Kilt Check Brewing Co	come back to and fix	NM	http://www.draftykiltbrewingco.com	87109
fdb1dcae-b91d-4392-9c6f-295e3b890ee3	3313 Girard Blvd NE	Albuquerque	35.117935	-106.614265	La Cumbre Brewing Co	come back to and fix	NM	http://www.lacumbrebrewing.com	87107
d98dc78e-8112-4660-8fa1-049b7961c68b	2220 Unser Blvd	Albuquerque	35.111553	-106.73036	Lava Rock Brewing Company	come back to and fix	NM	http://www.lavarockbrewpub.com	87120
f1261e7a-293c-4f08-ba1a-092e6f518790	9800 Montgomery Blvd NE Ste 7	Albuquerque	35.13022	-106.531906	Lizard Tail Brewing	come back to and fix	NM	http://www.lizardtailbrewing.com	87111
385971da-2197-4f76-8240-12f7811faa7b	9904 Montgomery Blvd NE	Albuquerque	35.130424	-106.53024	Marble Brewery - Mav Lab	come back to and fix	NM	\N	87111
f9b6dec6-f780-4bed-ba85-55ddc1153d1d	111 Marble Ave NW	Albuquerque	35.092937	-106.6467	Marble Brewery - Production	come back to and fix	NM	http://www.marblebrewery.com	87102
2d1fc54a-1271-4142-865d-a50ad4c0c040	4730 Pan American Fwy NE Ste D	Albuquerque	35.135815	-106.603966	Nexus Brewery	come back to and fix	NM	http://www.nexusbrewery.com	87109
f575e401-a5bc-4b06-a9dc-02cb83c91091	2926 Girard Blvd NE	Albuquerque	35.115765	-106.6135	Palmer Brewery & Cider House	come back to and fix	NM	\N	87107
b164048c-9596-4cf8-b235-9e18e710855f	1761 Bellamah Ave NW	Albuquerque	35.10125	-106.66424	Ponderosa Brewing	come back to and fix	NM	http://www.ponderosabrewing.net	87104
0f1e84f8-d97f-421d-89fa-77818a3e2783	1100 San Mateo Blvd NE Ste 50	Albuquerque	35.088306	-106.58585	Quarter Celtic Brewpub	come back to and fix	NM	http://www.quartercelticbrewery.com	87110
591ec3c8-a57b-431d-a33e-755ee1cd7f2e	1001 Candelaria Rd NE	Albuquerque	35.115837	-106.62914	Red Door Brewing Co	come back to and fix	NM	http://www.reddoorbrewing.com	87107
aa271bdd-c0f3-4c99-879e-a66479e19bb5	1912 2nd Street NW	Albuquerque	35.10338	-106.64545	Rio Bravo Brewing Company	come back to and fix	NM	http://www.riobravobrewing.com	87102
6e9be4bc-2f90-4e4b-816f-90f02898db1a	413 2nd St SW	Albuquerque	35.080746	-106.65017	Sidetrack Brewing Company	come back to and fix	NM	http://www.sidetrackbrewing.net	87102
0ca26943-a45a-4820-a2da-c91f8968d2e9	5700 San Antonio Dr NE Ste B1	Albuquerque	35.159122	-106.58027	Starr Brothers Brewing Co.	come back to and fix	NM	http://starrbrothersbrewing.com	87109
bee33b8a-d20b-46f6-b63e-f181548ed36d	8305 2nd St NW	Los Ranchos de Albuquerque	35.175365	-106.62526	Steel Bender Brewyard	come back to and fix	NM	http://www.steelbenderbrewyard.com	87114
d40666a0-9344-4f8d-b5a0-e86ca5ea216e	2027 Yale Blvd SE	Albuquerque	35.059	-106.62239	The 377 Brewery	come back to and fix	NM	http://www.the377.com	87106
0f02334a-b3b0-4d82-b2d3-5d43ef1a4c32	10250 Cottonwood Park NW # S	Albuquerque	35.20397	-106.65469	Toltec Brewing Co	come back to and fix	NM	\N	87114
7db38311-d810-4619-9880-ddf6bf80deca	1800 4th St NW	Albuquerque	35.10223	-106.64804	Tractor Brewing Co	come back to and fix	NM	http://www.getplowed.com	87102
\.


--
-- Data for Name: checkIn; Type: TABLE DATA; Schema: public; Owner: username
--

COPY public."checkIn" ("checkInId", "checkInProfileId", "checkInBreweryId", "checkInDateTime", "checkInEndTime", "checkInIsActive", "checkInWhatChaDrinkin") FROM stdin;
4678757b-a157-4679-8c6e-6e3562773723	5184aea9-5f9c-4cbe-b04f-b821e34d3fcf	64f656e1-8a6f-41c3-a5bd-4f277ff88442	2022-09-14 14:24:28+00	2022-09-14 14:24:28+00	t	Galaxy Lager
a6e60a7c-bf86-495c-b0ff-a8ecc667e737	bdd4af14-185f-4dbd-a321-2e2435ca2de5	3504b463-7d24-47d2-af90-a5fc64ba5aae	2022-09-14 14:27:49+00	2022-09-14 14:27:49+00	t	Short Fuze Blonde Ale
75fa3e53-3aeb-4723-a860-05bf130bb4f5	ce28d7af-551e-452a-b1cc-9a0d58ed16a1	64f656e1-8a6f-41c3-a5bd-4f277ff88442	2022-09-14 14:21:06+00	2022-09-14 14:21:06+00	f	Alien IPA!
a6adda53-17ff-440c-9bfe-37edf4d631ab	32e7a743-cdbe-4b67-b20b-50064ae26cfc	64f656e1-8a6f-41c3-a5bd-4f277ff88442	2022-09-14 15:00:20+00	2022-09-14 15:00:20+00	t	Galaxy Lager
7f5f85ee-3fbf-4491-b319-9ca5aed6f758	192f52cb-f218-4032-8a54-74628080d934	0ca26943-a45a-4820-a2da-c91f8968d2e9	2016-06-23 02:10:25+00	2016-06-24 02:10:25+00	t	Two Trick Pony
\.


--
-- Data for Name: friend; Type: TABLE DATA; Schema: public; Owner: username
--

COPY public.friend ("friendRequesteeProfileId", "friendRequestorProfileId", "friendRequestApproved") FROM stdin;
bdd4af14-185f-4dbd-a321-2e2435ca2de5	192f52cb-f218-4032-8a54-74628080d934	t
3286b8c1-6519-4247-8f04-beddcc585d13	bdd4af14-185f-4dbd-a321-2e2435ca2de5	t
56088f70-2afa-4ca6-ba79-040b4e70d9a0	192f52cb-f218-4032-8a54-74628080d934	t
56088f70-2afa-4ca6-ba79-040b4e70d9a0	ce28d7af-551e-452a-b1cc-9a0d58ed16a1	t
192f52cb-f218-4032-8a54-74628080d934	ce28d7af-551e-452a-b1cc-9a0d58ed16a1	t
56088f70-2afa-4ca6-ba79-040b4e70d9a0	bdd4af14-185f-4dbd-a321-2e2435ca2de5	t
5184aea9-5f9c-4cbe-b04f-b821e34d3fcf	ce28d7af-551e-452a-b1cc-9a0d58ed16a1	t
56088f70-2afa-4ca6-ba79-040b4e70d9a0	5184aea9-5f9c-4cbe-b04f-b821e34d3fcf	t
bdd4af14-185f-4dbd-a321-2e2435ca2de5	ce28d7af-551e-452a-b1cc-9a0d58ed16a1	t
ce28d7af-551e-452a-b1cc-9a0d58ed16a1	32e7a743-cdbe-4b67-b20b-50064ae26cfc	t
\.


--
-- Data for Name: profile; Type: TABLE DATA; Schema: public; Owner: username
--

COPY public.profile ("profileId", "profileActivationToken", "profileAvatarUrl", "profileEmail", "profileHash", "profileName") FROM stdin;
0786fee2-527d-442d-b4b6-d025a833209b	\N	\N	thishouldnt@showup.com	$argon2id$v=19$m=65536,t=3,p=1$GBw1y2SO7qQtvUioGywQ4g$CEZV2wl5qlfMPg+O2hsdoPZztASGLOOoBhX9ks18HeE	this profile shouldnt show up
3286b8c1-6519-4247-8f04-beddcc585d13	\N	\N	jedmorten@hotmail.com	$argon2id$v=19$m=65536,t=3,p=1$51vRhMfVsz4lrtjUJiCdgg$AXSyi7EEfoteukYTc21eT8BniCb2mGFuC0hMnc2eNk4	Jared
bdd4af14-185f-4dbd-a321-2e2435ca2de5	\N	https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Sandra_Bullock_in_July_2013.jpg/800px-Sandra_Bullock_in_July_2013.jpg	user2@user.com	$argon2id$v=19$m=65536,t=3,p=1$oIukcnusg+2mOHjeuT9waw$Zs7M+lGpPOPavoqkxI/FYL7PcLmw4MFKwbM0lu1FpII	Sandra
56088f70-2afa-4ca6-ba79-040b4e70d9a0	\N	https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2Njc5NDYzOTQ4NDYxNDA4/michael-jordan.jpg	user1@user.com	$argon2id$v=19$m=65536,t=3,p=1$LZbHy2Y7YdLd4nSBNzn13w$UHH0KO6wnovewsA32I+46J9ZW6mKMd+NyAsN2M08jdY	Michael
5184aea9-5f9c-4cbe-b04f-b821e34d3fcf	\N	https://resizing.flixster.com/AnLIq9_QdeQ5C9n9tCAUz_5UEBw=/218x280/v2/https://flxt.tmsimg.com/assets/62982_v9_bb.jpg	user4@user.com	$argon2id$v=19$m=65536,t=3,p=1$8yjncrZv0u1RqLlevDFPWw$9KmvM+sTHAa3L+cth8hPCAxrV36dKWnrfBAF5GBzn2s	Tom
32e7a743-cdbe-4b67-b20b-50064ae26cfc	\N	https://static.independent.co.uk/2022/09/07/00/newFile.jpg?quality=75&width=640&auto=webp&crop=2052:1540,smart	user6@user.com	$argon2id$v=19$m=65536,t=3,p=1$MePhto+fVxJeh8VMTlya6A$+2HK2jVZBRFV3vpLlrgmXv/GEWXBlnxO1yQUr44cV7c	Jennifer
192f52cb-f218-4032-8a54-74628080d934	\N	https://m.media-amazon.com/images/M/MV5BMTc0NDQzODAwNF5BMl5BanBnXkFtZTYwMzUzNTk3._V1_UY317_CR6,0,214,317_AL_.jpg	user3@user.com	$argon2id$v=19$m=65536,t=3,p=1$rEFbLhQIunvHarvBHUN0ng$/3f7lOfRm7bpi2jfZTlzWeo8K1PFxK0BQKAmVb+n+bw	Eddie
ce28d7af-551e-452a-b1cc-9a0d58ed16a1	\N	https://media.npr.org/assets/img/2022/04/22/gettyimages-1182090397-3f5edaabfa56a82a1c08624683ab71f5712f5c5f-s800-c85.webp	user@user.com	$argon2id$v=19$m=65536,t=3,p=1$ROsByn8xtspkkMiLHuq+mQ$Vx2M9nmR5nAraJ0sA+SaDDClJMlG64ih+peG+F3EaPE	Bill
\.


--
-- Name: brewery brewery_breweryName_key; Type: CONSTRAINT; Schema: public; Owner: username
--

ALTER TABLE ONLY public.brewery
    ADD CONSTRAINT "brewery_breweryName_key" UNIQUE ("breweryName");


--
-- Name: brewery brewery_breweryWebsite_key; Type: CONSTRAINT; Schema: public; Owner: username
--

ALTER TABLE ONLY public.brewery
    ADD CONSTRAINT "brewery_breweryWebsite_key" UNIQUE ("breweryWebsite");


--
-- Name: brewery brewery_pkey; Type: CONSTRAINT; Schema: public; Owner: username
--

ALTER TABLE ONLY public.brewery
    ADD CONSTRAINT brewery_pkey PRIMARY KEY ("breweryId");


--
-- Name: checkIn checkIn_pkey; Type: CONSTRAINT; Schema: public; Owner: username
--

ALTER TABLE ONLY public."checkIn"
    ADD CONSTRAINT "checkIn_pkey" PRIMARY KEY ("checkInId");


--
-- Name: profile profile_pkey; Type: CONSTRAINT; Schema: public; Owner: username
--

ALTER TABLE ONLY public.profile
    ADD CONSTRAINT profile_pkey PRIMARY KEY ("profileId");


--
-- Name: profile profile_profileEmail_key; Type: CONSTRAINT; Schema: public; Owner: username
--

ALTER TABLE ONLY public.profile
    ADD CONSTRAINT "profile_profileEmail_key" UNIQUE ("profileEmail");


--
-- Name: profile profile_profileName_key; Type: CONSTRAINT; Schema: public; Owner: username
--

ALTER TABLE ONLY public.profile
    ADD CONSTRAINT "profile_profileName_key" UNIQUE ("profileName");


--
-- Name: checkIn_checkInBreweryId_idx; Type: INDEX; Schema: public; Owner: username
--

CREATE INDEX "checkIn_checkInBreweryId_idx" ON public."checkIn" USING btree ("checkInBreweryId");


--
-- Name: checkIn_checkInProfileId_idx; Type: INDEX; Schema: public; Owner: username
--

CREATE INDEX "checkIn_checkInProfileId_idx" ON public."checkIn" USING btree ("checkInProfileId");


--
-- Name: friend_friendRequesteeProfileId_idx; Type: INDEX; Schema: public; Owner: username
--

CREATE INDEX "friend_friendRequesteeProfileId_idx" ON public.friend USING btree ("friendRequesteeProfileId");


--
-- Name: friend_friendRequestorProfileId_idx; Type: INDEX; Schema: public; Owner: username
--

CREATE INDEX "friend_friendRequestorProfileId_idx" ON public.friend USING btree ("friendRequestorProfileId");


--
-- Name: checkIn checkIn_checkInBreweryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: username
--

ALTER TABLE ONLY public."checkIn"
    ADD CONSTRAINT "checkIn_checkInBreweryId_fkey" FOREIGN KEY ("checkInBreweryId") REFERENCES public.brewery("breweryId");


--
-- Name: checkIn checkIn_checkInProfileId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: username
--

ALTER TABLE ONLY public."checkIn"
    ADD CONSTRAINT "checkIn_checkInProfileId_fkey" FOREIGN KEY ("checkInProfileId") REFERENCES public.profile("profileId");


--
-- Name: friend friend_friendRequesteeProfileId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: username
--

ALTER TABLE ONLY public.friend
    ADD CONSTRAINT "friend_friendRequesteeProfileId_fkey" FOREIGN KEY ("friendRequesteeProfileId") REFERENCES public.profile("profileId");


--
-- Name: friend friend_friendRequestorProfileId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: username
--

ALTER TABLE ONLY public.friend
    ADD CONSTRAINT "friend_friendRequestorProfileId_fkey" FOREIGN KEY ("friendRequestorProfileId") REFERENCES public.profile("profileId");


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

