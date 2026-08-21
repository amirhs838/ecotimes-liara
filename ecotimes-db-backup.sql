--
-- PostgreSQL database dump
--

\restrict 3OEYnvtaBVeJejre0N3eO6Pa4FqYPWMcgf8LPJpvKde8Dc1bKzEMuwhdtEXe19i

-- Dumped from database version 16.11
-- Dumped by pg_dump version 16.11

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
-- Name: PostStatus; Type: TYPE; Schema: public; Owner: petrotimes
--

CREATE TYPE public."PostStatus" AS ENUM (
    'DRAFT',
    'SCHEDULED',
    'PUBLISHED'
);


ALTER TYPE public."PostStatus" OWNER TO petrotimes;

--
-- Name: VideoType; Type: TYPE; Schema: public; Owner: petrotimes
--

CREATE TYPE public."VideoType" AS ENUM (
    'NONE',
    'UPLOAD',
    'APARAT',
    'YOUTUBE'
);


ALTER TYPE public."VideoType" OWNER TO petrotimes;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: AdminUser; Type: TABLE; Schema: public; Owner: petrotimes
--

CREATE TABLE public."AdminUser" (
    id text NOT NULL,
    email text NOT NULL,
    "passwordHash" text NOT NULL,
    name text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."AdminUser" OWNER TO petrotimes;

--
-- Name: Category; Type: TABLE; Schema: public; Owner: petrotimes
--

CREATE TABLE public."Category" (
    id text NOT NULL,
    name text NOT NULL,
    slug text NOT NULL,
    "order" integer DEFAULT 0 NOT NULL
);


ALTER TABLE public."Category" OWNER TO petrotimes;

--
-- Name: HomeSection; Type: TABLE; Schema: public; Owner: petrotimes
--

CREATE TABLE public."HomeSection" (
    id text NOT NULL,
    key text NOT NULL,
    name text NOT NULL,
    capacity integer DEFAULT 5 NOT NULL,
    "order" integer DEFAULT 0 NOT NULL
);


ALTER TABLE public."HomeSection" OWNER TO petrotimes;

--
-- Name: LiveStream; Type: TABLE; Schema: public; Owner: petrotimes
--

CREATE TABLE public."LiveStream" (
    id text NOT NULL,
    enabled boolean DEFAULT false NOT NULL,
    title text DEFAULT 'پخش زنده'::text NOT NULL,
    "aparatUrl" text DEFAULT ''::text NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."LiveStream" OWNER TO petrotimes;

--
-- Name: Media; Type: TABLE; Schema: public; Owner: petrotimes
--

CREATE TABLE public."Media" (
    id text NOT NULL,
    key text NOT NULL,
    url text NOT NULL,
    provider text NOT NULL,
    kind text NOT NULL,
    "mimeType" text NOT NULL,
    size integer NOT NULL,
    width integer,
    height integer,
    alt text DEFAULT ''::text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Media" OWNER TO petrotimes;

--
-- Name: Post; Type: TABLE; Schema: public; Owner: petrotimes
--

CREATE TABLE public."Post" (
    id text NOT NULL,
    slug text NOT NULL,
    kicker text,
    title text NOT NULL,
    lead text NOT NULL,
    body text NOT NULL,
    "homeImageId" text,
    "homeImageAlt" text DEFAULT ''::text NOT NULL,
    "innerImageId" text,
    "innerImageAlt" text DEFAULT ''::text NOT NULL,
    "videoType" public."VideoType" DEFAULT 'NONE'::public."VideoType" NOT NULL,
    "videoUrl" text,
    "videoDuration" integer,
    "categoryId" text NOT NULL,
    status public."PostStatus" DEFAULT 'DRAFT'::public."PostStatus" NOT NULL,
    "publishedAt" timestamp(3) without time zone NOT NULL,
    "hasOwnPage" boolean DEFAULT true NOT NULL,
    views integer DEFAULT 0 NOT NULL,
    "metaTitle" text,
    "metaDescription" text,
    "metaKeywords" text,
    "ogImageId" text,
    "canonicalUrl" text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "homepageVideoType" public."VideoType" DEFAULT 'NONE'::public."VideoType" NOT NULL,
    "homepageVideoUrl" text
);


ALTER TABLE public."Post" OWNER TO petrotimes;

--
-- Name: PostTag; Type: TABLE; Schema: public; Owner: petrotimes
--

CREATE TABLE public."PostTag" (
    "postId" text NOT NULL,
    "tagId" text NOT NULL
);


ALTER TABLE public."PostTag" OWNER TO petrotimes;

--
-- Name: SectionPlacement; Type: TABLE; Schema: public; Owner: petrotimes
--

CREATE TABLE public."SectionPlacement" (
    id text NOT NULL,
    "sectionId" text NOT NULL,
    "postId" text NOT NULL,
    "position" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."SectionPlacement" OWNER TO petrotimes;

--
-- Name: Tag; Type: TABLE; Schema: public; Owner: petrotimes
--

CREATE TABLE public."Tag" (
    id text NOT NULL,
    name text NOT NULL,
    slug text NOT NULL
);


ALTER TABLE public."Tag" OWNER TO petrotimes;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: petrotimes
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO petrotimes;

--
-- Data for Name: AdminUser; Type: TABLE DATA; Schema: public; Owner: petrotimes
--

COPY public."AdminUser" (id, email, "passwordHash", name, "createdAt", "updatedAt") FROM stdin;
cmsc690lo000outg4a61svg8k	admin@ecotimes.ir	$2b$12$JGpaF7XDZ2vvociKceMUYerkNy81wzFBg0NLuA.bpO6d.Kae1YqNe	مدیر سایت	2026-08-02 19:06:48.013	2026-08-02 19:06:48.013
\.


--
-- Data for Name: Category; Type: TABLE DATA; Schema: public; Owner: petrotimes
--

COPY public."Category" (id, name, slug, "order") FROM stdin;
cmsc690850000utg4wgwxvz0f	هوش مصنوعی	ai	1
cmsc6908h0001utg4r3l21p4d	اقتصاد دیجیتال	digital-economy	2
cmsc6908k0002utg4zmcbi2hy	سلامت و درمان	health	3
cmsc6908n0003utg4jdt9rscu	زیست‌فناوری و نانو	biotech-nano	4
cmsc6908p0004utg4vvk8r0zo	میکروالکترونیک	microelectronics	5
cmsc6908r0005utg41frb18qt	انرژی	energy	6
cmsc6908t0006utg43fmjckh6	آب و محیط‌زیست	water-environment	7
cmsc6908v0007utg45xjbrpg0	امنیت غذایی	food-security	8
cmsc6908x0008utg42jdolh8n	صنایع خلاق	creative-industries	9
\.


--
-- Data for Name: HomeSection; Type: TABLE DATA; Schema: public; Owner: petrotimes
--

COPY public."HomeSection" (id, key, name, capacity, "order") FROM stdin;
cmsc6909c000futg47vcgk40l	digital-economy	اقتصاد دیجیتال	3	7
cmst7ywed0007ut8o6l8xzttu	ad-1	تبلیغات ۱	1	8
cmst7ywef0008ut8o6s52puxq	ad-2	تبلیغات ۲	1	9
cmsc69098000cutg4l08vwngk	photos	گالری عکس	6	10
cmsc69095000autg4xe47yb12	hero	خبر ویژه (هیرو)	1	1
cmst7ywdq0001ut8o387y6z7c	hero-video	ویدیو پایین هیرو	1	2
cmsc69096000butg4v3wssaye	videos	بخش ویدیوها (۶ ویدیو)	6	3
cmsrz4z1x000dutd0g9mglqzs	top-stories	اخبار برتر	8	4
cmsdc5apf0001utooo1b01zzl	video-carousel	باکس ویدیو	10	5
cmsddo3p50000utccnjq1xpg3	magazine	مگزین (مجله)	5	6
\.


--
-- Data for Name: LiveStream; Type: TABLE DATA; Schema: public; Owner: petrotimes
--

COPY public."LiveStream" (id, enabled, title, "aparatUrl", "updatedAt") FROM stdin;
cmsc6909r000nutg40oqvdx92	f	پخش زنده اکوتایمز		2026-08-02 20:31:21.27
\.


--
-- Data for Name: Media; Type: TABLE DATA; Schema: public; Owner: petrotimes
--

COPY public."Media" (id, key, url, provider, kind, "mimeType", size, width, height, alt, "createdAt", "updatedAt") FROM stdin;
testmedia0000000000000000001	test-agents-gathering.jpg	/images/news/agents-gathering.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-13 23:05:39.582	2026-08-13 23:05:39.582
testmedia0000000000000000002	test-insurtech-event.jpg	/images/news/insurtech-event.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-13 23:05:39.582	2026-08-13 23:05:39.582
testmedia0000000000000000003	test-digital-branch.jpg	/images/news/digital-branch.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-13 23:05:39.582	2026-08-13 23:05:39.582
testmedia00000000000000011	test-central-insurance-iran.jpg	/images/news/central-insurance-iran.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000012	test-cii-interview.jpg	/images/news/cii-interview.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000013	test-claims-workshop.jpg	/images/news/claims-workshop.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000015	test-epolicy-platform.jpg	/images/news/epolicy-platform.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000016	test-insurance-conference.jpg	/images/news/insurance-conference.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000017	test-insurance-fund-ipo.jpg	/images/news/insurance-fund-ipo.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000018	test-insurance-history-doc.jpg	/images/news/insurance-history-doc.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000019	test-insurance-summit.jpg	/images/news/insurance-summit.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000021	test-insurtech-explainer.jpg	/images/news/insurtech-explainer.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000022	test-insurtech-funding.jpg	/images/news/insurtech-funding.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000023	test-insurtech-license.jpg	/images/news/insurtech-license.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000024	test-life-insurance-growth.jpg	/images/news/life-insurance-growth.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000025	test-mag-1.jpg	/images/news/mag-1.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000026	test-mag-2.jpg	/images/news/mag-2.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000027	test-mag-3.jpg	/images/news/mag-3.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000028	test-mag-4.jpg	/images/news/mag-4.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000029	test-mag-5.jpg	/images/news/mag-5.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000030	test-mkt-1.jpg	/images/news/mkt-1.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000031	test-mkt-2.jpg	/images/news/mkt-2.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000032	test-mkt-3.jpg	/images/news/mkt-3.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000033	test-mkt-4.jpg	/images/news/mkt-4.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000034	test-mkt-5.jpg	/images/news/mkt-5.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000035	test-mkt-6.jpg	/images/news/mkt-6.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000036	test-pop-1.jpg	/images/news/pop-1.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000037	test-pop-2.jpg	/images/news/pop-2.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000038	test-pop-3.jpg	/images/news/pop-3.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000039	test-pop-4.jpg	/images/news/pop-4.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000040	test-pop-5.jpg	/images/news/pop-5.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000041	test-reg-1.jpg	/images/news/reg-1.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000042	test-reg-2.jpg	/images/news/reg-2.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000043	test-reg-3.jpg	/images/news/reg-3.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000044	test-reg-4.jpg	/images/news/reg-4.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000045	test-reinsurance-asia.jpg	/images/news/reinsurance-asia.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000046	test-reinsurance-signing.jpg	/images/news/reinsurance-signing.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000047	test-syndicate-meeting.jpg	/images/news/syndicate-meeting.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000048	test-third-party-rule.jpg	/images/news/third-party-rule.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
testmedia00000000000000049	test-third-party-talk.jpg	/images/news/third-party-talk.jpg	local	image	image/jpeg	100000	\N	\N	تصویر خبر	2026-08-14 00:03:43.594	2026-08-14 00:03:43.594
\.


--
-- Data for Name: Post; Type: TABLE DATA; Schema: public; Owner: petrotimes
--

COPY public."Post" (id, slug, kicker, title, lead, body, "homeImageId", "homeImageAlt", "innerImageId", "innerImageAlt", "videoType", "videoUrl", "videoDuration", "categoryId", status, "publishedAt", "hasOwnPage", views, "metaTitle", "metaDescription", "metaKeywords", "ogImageId", "canonicalUrl", "createdAt", "updatedAt", "homepageVideoType", "homepageVideoUrl") FROM stdin;
cmsceqbop0011utfwawhtc6ty	demo-videos-2	\N	گزارش تصویری از بزرگ‌ترین مزرعه خورشیدی	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000016	گزارش تصویری از بزرگ‌ترین مزرعه خورشیدی	\N		APARAT	https://www.aparat.com/v/xyz123	108	cmsc6908r0005utg41frb18qt	PUBLISHED	2026-08-02 18:04:12.455	t	143	\N	\N	\N	\N	\N	2026-08-02 23:04:12.457	2026-08-15 08:20:30.761	NONE	\N
cmsceqbrd0035utfw3lyuia1d	demo-digital-economy-2	\N	بانکداری باز چیست؟	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000035	بانکداری باز چیست؟	\N		NONE	\N	\N	cmsc6908h0001utg4r3l21p4d	PUBLISHED	2026-08-02 08:34:12.551	t	123	\N	\N	\N	\N	\N	2026-08-02 23:04:12.553	2026-08-14 21:39:18.048	NONE	\N
cmsu3xlnb0000ut4kwvstyclt	گزارش-تصویری-از-بزرگ-ترین-مزرعه-خورشیدی	شایان بهرامی:	گزارش تصویری از بزرگ‌ترین مزرعه خورشیدی	تست	<p>تست</p>	testmedia00000000000000049	تست	testmedia00000000000000018	تست	NONE	\N	\N	cmsc6908p0004utg4vvk8r0zo	PUBLISHED	2026-08-15 08:19:00	t	0	\N	\N	\N	\N	\N	2026-08-15 08:21:47.351	2026-08-15 08:27:15.903	NONE	\N
cmsceqbnu000dutfwckn3k7sz	demo-breaking-3	\N	داروی جدید زیست‌فناوری ایران مجوز سازمان غذا و دارو را گرفت؛ تولید انبوه از پاییز آغاز می‌شود	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia0000000000000000001	داروی جدید زیست‌فناوری مجوز گرفت	\N		NONE	\N	\N	cmsc6908n0003utg4jdt9rscu	PUBLISHED	2026-08-02 21:04:12.425	t	148	\N	\N	\N	\N	\N	2026-08-02 23:04:12.427	2026-08-03 14:07:49.653	NONE	\N
cmsceqbot0015utfwy6qcmivm	demo-videos-3	\N	رونمایی از تراشه جدید ملی	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000017	رونمایی از تراشه جدید ملی	\N		APARAT	https://www.aparat.com/v/xyz123	148	cmsc6908p0004utg4vvk8r0zo	PUBLISHED	2026-08-02 17:34:12.46	t	140	\N	\N	\N	\N	\N	2026-08-02 23:04:12.461	2026-08-02 23:04:12.461	NONE	\N
cmsceqbnk0005utfw7c1abggl	demo-breaking-1	\N	گزارش تازه از بازار تراشه‌های جهان؛ سهم ایران از زنجیره تأمین نیمه‌رساناها بیشتر شد	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia0000000000000000002	گزارش تازه از بازار تراشه‌های جهان	\N		NONE	\N	\N	cmsc6908p0004utg4vvk8r0zo	PUBLISHED	2026-08-02 22:04:12.414	t	149	\N	\N	\N	\N	\N	2026-08-02 23:04:12.416	2026-08-03 14:07:49.619	NONE	\N
cmsceqbs6003putfwhifzz23r	demo-biotech-nano-3	\N	نانوذرات در تصفیه آب	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000040	نانوذرات در تصفیه آب	\N		NONE	\N	\N	cmsc6908n0003utg4jdt9rscu	PUBLISHED	2026-08-02 06:04:12.581	t	117	\N	\N	\N	\N	\N	2026-08-02 23:04:12.583	2026-08-02 23:04:12.583	NONE	\N
cmsceqbmm0001utfw6nq1cmtb	demo-hero-1	معاون رئیس جمهور:	پیشرفت بزرگ در تولید تراشه‌های هوش مصنوعی	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia0000000000000000001	پیشرفت بزرگ ایران در تولید تراشه‌های هوش مصنوعی	\N		NONE	\N	\N	cmsc690850000utg4wgwxvz0f	PUBLISHED	2026-08-02 22:34:00	t	162	\N	\N	\N	\N	\N	2026-08-02 23:04:12.379	2026-08-15 08:31:25.21	APARAT	https://www.aparat.com/v/xyz123
cmsceqbny000hutfw4r9j2yxn	demo-breaking-4	\N	اقتصاد دیجیتال ایران رشد ۲۰ درصدی را ثبت کرد	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000011	اقتصاد دیجیتال ایران رشد ۲۰ درصدی را ثبت کرد	\N		NONE	\N	\N	cmsc6908h0001utg4r3l21p4d	PUBLISHED	2026-08-02 20:34:00	t	146	\N	\N	\N	\N	\N	2026-08-02 23:04:12.43	2026-08-15 08:29:04.966	NONE	\N
cmsceqbnp0009utfwx0kw2tdk	demo-breaking-2	\N	افتتاح بزرگ‌ترین نیروگاه خورشیدی کشور با ظرفیت تولید ۵۰۰ مگاوات برق پاک	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia0000000000000000003	افتتاح بزرگ‌ترین نیروگاه خورشیدی کشور	\N		NONE	\N	\N	cmsc6908r0005utg41frb18qt	PUBLISHED	2026-08-02 21:34:12.419	t	150	\N	\N	\N	\N	\N	2026-08-02 23:04:12.421	2026-08-14 17:58:57.348	NONE	\N
cmsceqbto004xutfw66shjs93	demo-energy-1	\N	رکورد تولید برق خورشیدی	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000011	رکورد تولید برق خورشیدی	\N		NONE	\N	\N	cmsc6908r0005utg41frb18qt	PUBLISHED	2026-08-02 00:34:12.635	t	107	\N	\N	\N	\N	\N	2026-08-02 23:04:12.637	2026-08-03 15:05:51.882	NONE	\N
cmsceqbo3000lutfwsz0lqpv4	demo-breaking-5	\N	آب‌رسانی هوشمند به ۵ کلان‌شهر کشور رسید؛ کاهش ۳۰ درصدی هدررفت آب با فناوری‌های نوین	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000012	آب‌رسانی هوشمند به ۵ کلان‌شهر رسید	\N		NONE	\N	\N	cmsc6908t0006utg43fmjckh6	PUBLISHED	2026-08-02 20:04:12.433	t	145	\N	\N	\N	\N	\N	2026-08-02 23:04:12.435	2026-08-03 14:07:49.677	NONE	\N
cmsceqbod000tutfwp1iqegvn	demo-breaking-7	\N	امنیت غذایی با فناوری‌های نوین؛ نقش کشاورزی دقیق و هوش مصنوعی در افزایش بهره‌وری مزارع	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia0000000000000000003	امنیت غذایی با فناوری‌های نوین	\N		NONE	\N	\N	cmsc6908v0007utg45xjbrpg0	PUBLISHED	2026-08-02 19:04:12.444	t	143	\N	\N	\N	\N	\N	2026-08-02 23:04:12.445	2026-08-03 14:07:49.685	NONE	\N
cmsceqbp5001dutfwe1s6zb81	demo-photos-2	\N	جشنواره فناوری تهران	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000019	جشنواره فناوری تهران	\N		NONE	\N	\N	cmsc690850000utg4wgwxvz0f	PUBLISHED	2026-08-02 16:34:12.472	t	138	\N	\N	\N	\N	\N	2026-08-02 23:04:12.473	2026-08-02 23:04:12.473	NONE	\N
cmsceqbpa001hutfwxpbrd2xr	demo-photos-3	\N	نمایشگاه انرژی‌های تجدیدپذیر	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia0000000000000000002	نمایشگاه انرژی‌های تجدیدپذیر	\N		NONE	\N	\N	cmsc6908r0005utg41frb18qt	PUBLISHED	2026-08-02 16:04:12.476	t	137	\N	\N	\N	\N	\N	2026-08-02 23:04:12.478	2026-08-02 23:04:12.478	NONE	\N
cmsceqbpf001lutfw4acy2abi	demo-ai-1	\N	مدل زبانی فارسی رکورد جهانی شکست؛ هوش مصنوعی ایرانی در بنچمارک بین‌المللی از حریفان پیشی گرفت	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000021	مدل زبانی فارسی رکورد جهانی شکست	\N		NONE	\N	\N	cmsc690850000utg4wgwxvz0f	PUBLISHED	2026-08-02 15:34:12.482	t	136	\N	\N	\N	\N	\N	2026-08-02 23:04:12.484	2026-08-03 14:07:49.688	APARAT	https://www.aparat.com/v/xyz123
cmsceqbpk001putfwtl2w8q2r	demo-ai-2	\N	هوش مصنوعی در بیمارستان‌های ایران	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000022	هوش مصنوعی در بیمارستان‌های ایران	\N		NONE	\N	\N	cmsc690850000utg4wgwxvz0f	PUBLISHED	2026-08-02 15:04:12.487	t	135	\N	\N	\N	\N	\N	2026-08-02 23:04:12.489	2026-08-02 23:04:12.489	NONE	\N
cmsceqbpq001tutfwoh71p7gj	demo-ai-3	\N	استارتاپ ایرانی جایزه جهانی گرفت	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000023	استارتاپ ایرانی جایزه جهانی گرفت	\N		NONE	\N	\N	cmsc690850000utg4wgwxvz0f	PUBLISHED	2026-08-02 14:34:12.493	t	134	\N	\N	\N	\N	\N	2026-08-02 23:04:12.494	2026-08-02 23:04:12.494	NONE	\N
cmsceqbpu001xutfw9hsd4ckk	demo-ai-4	\N	ربات‌های انسان‌نما به خط تولید آمدند	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000024	ربات‌های انسان‌نما به خط تولید آمدند	\N		NONE	\N	\N	cmsc690850000utg4wgwxvz0f	PUBLISHED	2026-08-02 14:04:12.497	t	133	\N	\N	\N	\N	\N	2026-08-02 23:04:12.498	2026-08-02 23:04:12.498	NONE	\N
cmsceqbpz0021utfwiaucc0au	demo-ai-5	\N	آموزش هوش مصنوعی در مدارس	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000025	آموزش هوش مصنوعی در مدارس	\N		NONE	\N	\N	cmsc690850000utg4wgwxvz0f	PUBLISHED	2026-08-02 13:34:12.502	t	132	\N	\N	\N	\N	\N	2026-08-02 23:04:12.503	2026-08-02 23:04:12.503	NONE	\N
cmsceqbq30025utfw36ybfh7q	demo-ai-6	\N	تراشه عصبی ایرانی رونمایی شد	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000026	تراشه عصبی ایرانی رونمایی شد	\N		NONE	\N	\N	cmsc690850000utg4wgwxvz0f	PUBLISHED	2026-08-02 13:04:12.506	t	131	\N	\N	\N	\N	\N	2026-08-02 23:04:12.508	2026-08-02 23:04:12.508	NONE	\N
cmsceqbo9000putfwxvrkl82j	demo-breaking-6	\N	صنایع خلاق و اقتصاد فرهنگ؛ موج جدید سرمایه‌گذاری در گردشگری فرهنگی و محتوای دیجیتال	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000013	صنایع خلاق و اقتصاد فرهنگ	\N		NONE	\N	\N	cmsc6908x0008utg42jdolh8n	PUBLISHED	2026-08-02 19:34:12.44	t	146	\N	\N	\N	\N	\N	2026-08-02 23:04:12.441	2026-08-14 16:17:36.364	NONE	\N
cmsceqbp00019utfwd9aqwg5x	demo-photos-1	\N	گردهمایی شرکت‌های دانش‌بنیان	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000018	گردهمایی شرکت‌های دانش‌بنیان	\N		NONE	\N	\N	cmsc6908h0001utg4r3l21p4d	PUBLISHED	2026-08-02 17:04:12.467	t	142	\N	\N	\N	\N	\N	2026-08-02 23:04:12.468	2026-08-14 21:13:19.578	NONE	\N
cmsceqboi000xutfw73ddc69c	demo-videos-1	\N	مستند کوتاه: آینده هوش مصنوعی در ایران	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000015	مستند کوتاه: آینده هوش مصنوعی در ایران	\N		APARAT	https://www.aparat.com/v/xyz123	68	cmsc690850000utg4wgwxvz0f	PUBLISHED	2026-08-02 18:34:12.449	t	145	\N	\N	\N	\N	\N	2026-08-02 23:04:12.45	2026-08-14 21:31:49.972	NONE	\N
cmsceqbq80029utfwagqtv7rl	demo-ai-7	\N	هوش مصنوعی و آینده کار	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000027	هوش مصنوعی و آینده کار	\N		NONE	\N	\N	cmsc690850000utg4wgwxvz0f	PUBLISHED	2026-08-02 12:34:12.511	t	130	\N	\N	\N	\N	\N	2026-08-02 23:04:12.513	2026-08-02 23:04:12.513	NONE	\N
cmsceqbqe002dutfwhhv6apxp	demo-ai-8	\N	بهره‌وری صنعت با یادگیری ماشین	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000028	بهره‌وری صنعت با یادگیری ماشین	\N		NONE	\N	\N	cmsc690850000utg4wgwxvz0f	PUBLISHED	2026-08-02 12:04:12.517	t	129	\N	\N	\N	\N	\N	2026-08-02 23:04:12.518	2026-08-02 23:04:12.518	NONE	\N
cmsceqbqi002hutfwex7wipty	demo-ai-9	\N	دستیار صوتی فارسی معرفی شد	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000029	دستیار صوتی فارسی معرفی شد	\N		NONE	\N	\N	cmsc690850000utg4wgwxvz0f	PUBLISHED	2026-08-02 11:34:12.521	t	128	\N	\N	\N	\N	\N	2026-08-02 23:04:12.522	2026-08-02 23:04:12.522	NONE	\N
cmsceqbqo002lutfwmszsqi33	demo-ai-10	\N	هوش مصنوعی در کشاورزی دقیق	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000030	هوش مصنوعی در کشاورزی دقیق	\N		NONE	\N	\N	cmsc690850000utg4wgwxvz0f	PUBLISHED	2026-08-02 11:04:12.526	t	127	\N	\N	\N	\N	\N	2026-08-02 23:04:12.528	2026-08-02 23:04:12.528	NONE	\N
cmsceqbqt002putfwcfevz2ly	demo-ai-11	\N	تشخیص زودهنگام بیماری با AI	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000031	تشخیص زودهنگام بیماری با AI	\N		NONE	\N	\N	cmsc690850000utg4wgwxvz0f	PUBLISHED	2026-08-02 10:34:12.532	t	126	\N	\N	\N	\N	\N	2026-08-02 23:04:12.533	2026-08-02 23:04:12.533	NONE	\N
cmsceqbqx002tutfwtppfbswu	demo-ai-12	\N	مسابقه ملی رباتیک	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000032	مسابقه ملی رباتیک	\N		NONE	\N	\N	cmsc690850000utg4wgwxvz0f	PUBLISHED	2026-08-02 10:04:12.536	t	125	\N	\N	\N	\N	\N	2026-08-02 23:04:12.537	2026-08-02 23:04:12.537	NONE	\N
cmsceqbr0002xutfw6ngfzlsp	demo-ai-13	\N	صندوق سرمایه‌گذاری هوش مصنوعی	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000033	صندوق سرمایه‌گذاری هوش مصنوعی	\N		NONE	\N	\N	cmsc690850000utg4wgwxvz0f	PUBLISHED	2026-08-02 09:34:12.539	t	124	\N	\N	\N	\N	\N	2026-08-02 23:04:12.541	2026-08-02 23:04:12.541	NONE	\N
cmsceqbr80031utfwzm825ymy	demo-digital-economy-1	\N	رشد پرداخت‌های دیجیتال در ایران	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000034	رشد پرداخت‌های دیجیتال در ایران	\N		NONE	\N	\N	cmsc6908h0001utg4r3l21p4d	PUBLISHED	2026-08-02 09:04:12.546	t	123	\N	\N	\N	\N	\N	2026-08-02 23:04:12.548	2026-08-02 23:04:12.548	NONE	\N
cmsceqbri0039utfwk6t6hxt7	demo-digital-economy-3	\N	رمزریال در مسیر آزمایشی	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000036	رمزریال در مسیر آزمایشی	\N		NONE	\N	\N	cmsc6908h0001utg4r3l21p4d	PUBLISHED	2026-08-02 08:04:12.556	t	121	\N	\N	\N	\N	\N	2026-08-02 23:04:12.557	2026-08-02 23:04:12.557	NONE	\N
cmsceqbrp003dutfwd2fffx9v	demo-health-1	\N	پیوند قلب با دستگاه ایرانی موفق شد	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000037	پیوند قلب با دستگاه ایرانی موفق شد	\N		NONE	\N	\N	cmsc6908k0002utg4zmcbi2hy	PUBLISHED	2026-08-02 07:34:12.563	t	120	\N	\N	\N	\N	\N	2026-08-02 23:04:12.566	2026-08-02 23:04:12.566	NONE	\N
cmsceqbrw003hutfw83r35eiq	demo-biotech-nano-1	\N	داروی نانویی ایرانی وارد بازار شد	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000038	داروی نانویی ایرانی وارد بازار شد	\N		NONE	\N	\N	cmsc6908n0003utg4jdt9rscu	PUBLISHED	2026-08-02 07:04:12.57	t	119	\N	\N	\N	\N	\N	2026-08-02 23:04:12.572	2026-08-02 23:04:12.572	NONE	\N
cmsceqbs2003lutfwaeu131pn	demo-biotech-nano-2	\N	واکسن جدید در فاز بالینی	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000039	واکسن جدید در فاز بالینی	\N		NONE	\N	\N	cmsc6908n0003utg4jdt9rscu	PUBLISHED	2026-08-02 06:34:12.577	t	118	\N	\N	\N	\N	\N	2026-08-02 23:04:12.578	2026-08-02 23:04:12.578	NONE	\N
cmsceqbsa003tutfwpwvx90fk	demo-biotech-nano-4	\N	زیست‌فناوری و امنیت غذایی	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000041	زیست‌فناوری و امنیت غذایی	\N		NONE	\N	\N	cmsc6908n0003utg4jdt9rscu	PUBLISHED	2026-08-02 05:34:12.585	t	116	\N	\N	\N	\N	\N	2026-08-02 23:04:12.586	2026-08-02 23:04:12.586	NONE	\N
cmsceqbsg003xutfwwnicdj44	demo-biotech-nano-5	\N	سلول‌های بنیادی امید تازه	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000042	سلول‌های بنیادی امید تازه	\N		NONE	\N	\N	cmsc6908n0003utg4jdt9rscu	PUBLISHED	2026-08-02 05:04:12.59	t	115	\N	\N	\N	\N	\N	2026-08-02 23:04:12.593	2026-08-02 23:04:12.593	NONE	\N
cmsceqbsl0041utfwcerrogbe	demo-biotech-nano-6	\N	نانوروبات جراح	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000043	نانوروبات جراح	\N		NONE	\N	\N	cmsc6908n0003utg4jdt9rscu	PUBLISHED	2026-08-02 04:34:12.596	t	114	\N	\N	\N	\N	\N	2026-08-02 23:04:12.597	2026-08-02 23:04:12.597	NONE	\N
cmsceqbsq0045utfwluv4x6bv	demo-biotech-nano-7	\N	تولید انسولین ملی	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000044	تولید انسولین ملی	\N		NONE	\N	\N	cmsc6908n0003utg4jdt9rscu	PUBLISHED	2026-08-02 04:04:12.601	t	113	\N	\N	\N	\N	\N	2026-08-02 23:04:12.602	2026-08-02 23:04:12.602	NONE	\N
cmsceqbsw0049utfw9t0vgckm	demo-biotech-nano-8	\N	بانک ژن ایران گسترش یافت	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000045	بانک ژن ایران گسترش یافت	\N		NONE	\N	\N	cmsc6908n0003utg4jdt9rscu	PUBLISHED	2026-08-02 03:34:12.605	t	112	\N	\N	\N	\N	\N	2026-08-02 23:04:12.608	2026-08-02 23:04:12.608	NONE	\N
cmsceqbt2004dutfwx9bn3r27	demo-microelectronics-1	\N	فاب تراشه جدید افتتاح شد	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000046	فاب تراشه جدید افتتاح شد	\N		NONE	\N	\N	cmsc6908p0004utg4vvk8r0zo	PUBLISHED	2026-08-02 03:04:12.613	t	111	\N	\N	\N	\N	\N	2026-08-02 23:04:12.615	2026-08-02 23:04:12.615	NONE	\N
cmsceqbt7004hutfwulyyq6zj	demo-microelectronics-2	\N	واردات تجهیزات نیمه‌رسانا	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000047	واردات تجهیزات نیمه‌رسانا	\N		NONE	\N	\N	cmsc6908p0004utg4vvk8r0zo	PUBLISHED	2026-08-02 02:34:12.617	t	110	\N	\N	\N	\N	\N	2026-08-02 23:04:12.619	2026-08-02 23:04:12.619	NONE	\N
cmsceqbtb004lutfw4xt43v2t	demo-microelectronics-3	\N	طراحی چیپ ملی	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000048	طراحی چیپ ملی	\N		NONE	\N	\N	cmsc6908p0004utg4vvk8r0zo	PUBLISHED	2026-08-02 02:04:12.622	t	109	\N	\N	\N	\N	\N	2026-08-02 23:04:12.623	2026-08-02 23:04:12.623	NONE	\N
cmsceqbtg004putfwelot9nga	demo-microelectronics-4	\N	رشد صادرات الکترونیک	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000049	رشد صادرات الکترونیک	\N		NONE	\N	\N	cmsc6908p0004utg4vvk8r0zo	PUBLISHED	2026-08-02 01:34:12.627	t	108	\N	\N	\N	\N	\N	2026-08-02 23:04:12.628	2026-08-02 23:04:12.628	NONE	\N
cmsceqbtj004tutfw8p2pghm0	demo-microelectronics-5	\N	خط تولید سنسور ایرانی	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia0000000000000000001	خط تولید سنسور ایرانی	\N		NONE	\N	\N	cmsc6908p0004utg4vvk8r0zo	PUBLISHED	2026-08-02 01:04:12.63	t	107	\N	\N	\N	\N	\N	2026-08-02 23:04:12.631	2026-08-02 23:04:12.631	NONE	\N
cmsceqbts0051utfw84qc4tm9	demo-energy-2	\N	ذخیره‌سازهای بزرگ باتری	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000012	ذخیره‌سازهای بزرگ باتری	\N		NONE	\N	\N	cmsc6908r0005utg41frb18qt	PUBLISHED	2026-08-02 00:04:12.639	t	105	\N	\N	\N	\N	\N	2026-08-02 23:04:12.641	2026-08-02 23:04:12.641	NONE	\N
cmsceqbtw0055utfw40rrqtds	demo-energy-3	\N	بخش‌نامه جدید انرژی	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000013	بخش‌نامه جدید انرژی	\N		NONE	\N	\N	cmsc6908r0005utg41frb18qt	PUBLISHED	2026-08-01 23:34:12.643	t	104	\N	\N	\N	\N	\N	2026-08-02 23:04:12.645	2026-08-02 23:04:12.645	NONE	\N
cmsceqbtz0059utfw385cdedx	demo-energy-4	\N	هیدروژن سبز در ایران	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia0000000000000000003	هیدروژن سبز در ایران	\N		NONE	\N	\N	cmsc6908r0005utg41frb18qt	PUBLISHED	2026-08-01 23:04:12.646	t	103	\N	\N	\N	\N	\N	2026-08-02 23:04:12.647	2026-08-02 23:04:12.647	NONE	\N
cmsceqbu3005dutfwbl15msua	demo-water-environment-1	\N	پروژه انتقال آب هوشمند	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000015	پروژه انتقال آب هوشمند	\N		NONE	\N	\N	cmsc6908t0006utg43fmjckh6	PUBLISHED	2026-08-01 22:34:12.65	t	102	\N	\N	\N	\N	\N	2026-08-02 23:04:12.651	2026-08-02 23:04:12.651	NONE	\N
cmsceqbu6005hutfw89k0mqq1	demo-water-environment-2	\N	کاهش مصرف آب کشاورزی	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000016	کاهش مصرف آب کشاورزی	\N		NONE	\N	\N	cmsc6908t0006utg43fmjckh6	PUBLISHED	2026-08-01 22:04:12.653	t	101	\N	\N	\N	\N	\N	2026-08-02 23:04:12.655	2026-08-02 23:04:12.655	NONE	\N
cmsceqbua005lutfwzxisdeeu	demo-water-environment-3	\N	حفاظت از تالاب‌ها	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000017	حفاظت از تالاب‌ها	\N		NONE	\N	\N	cmsc6908t0006utg43fmjckh6	PUBLISHED	2026-08-01 21:34:12.657	t	100	\N	\N	\N	\N	\N	2026-08-02 23:04:12.659	2026-08-02 23:04:12.659	NONE	\N
cmsceqbug005putfw2wgdrhwd	demo-food-security-1	\N	ذخایر استراتژیک گندم	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000018	ذخایر استراتژیک گندم	\N		NONE	\N	\N	cmsc6908v0007utg45xjbrpg0	PUBLISHED	2026-08-01 21:04:12.663	t	99	\N	\N	\N	\N	\N	2026-08-02 23:04:12.664	2026-08-02 23:04:12.664	NONE	\N
cmsceqbuk005tutfwfjhegtl3	demo-food-security-2	\N	کشت قراردادی گسترش یافت	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000019	کشت قراردادی گسترش یافت	\N		NONE	\N	\N	cmsc6908v0007utg45xjbrpg0	PUBLISHED	2026-08-01 20:34:12.666	t	98	\N	\N	\N	\N	\N	2026-08-02 23:04:12.668	2026-08-02 23:04:12.668	NONE	\N
cmsceqbun005xutfw8fmc4twx	demo-food-security-3	\N	فناوری در گلخانه‌ها	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia0000000000000000002	فناوری در گلخانه‌ها	\N		NONE	\N	\N	cmsc6908v0007utg45xjbrpg0	PUBLISHED	2026-08-01 20:04:12.67	t	97	\N	\N	\N	\N	\N	2026-08-02 23:04:12.672	2026-08-02 23:04:12.672	NONE	\N
cmsceqbut0061utfwkqnotv6u	demo-creative-industries-1	\N	صادرات بازی‌های ایرانی	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000021	صادرات بازی‌های ایرانی	\N		NONE	\N	\N	cmsc6908x0008utg42jdolh8n	PUBLISHED	2026-08-01 19:34:12.676	t	96	\N	\N	\N	\N	\N	2026-08-02 23:04:12.677	2026-08-02 23:04:12.677	NONE	\N
cmsceqbuw0065utfwmdvxbf2b	demo-creative-industries-2	\N	سینما و اقتصاد فرهنگ	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000022	سینما و اقتصاد فرهنگ	\N		NONE	\N	\N	cmsc6908x0008utg42jdolh8n	PUBLISHED	2026-08-01 19:04:12.679	t	95	\N	\N	\N	\N	\N	2026-08-02 23:04:12.68	2026-08-02 23:04:12.68	NONE	\N
cmsceqbuz0069utfw8fwytqtd	demo-creative-industries-3	\N	استارتاپ‌های محتوا	خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.	<p>متن نمونه بدنه خبر.</p>	testmedia00000000000000023	استارتاپ‌های محتوا	\N		NONE	\N	\N	cmsc6908x0008utg42jdolh8n	PUBLISHED	2026-08-01 18:34:12.682	t	94	\N	\N	\N	\N	\N	2026-08-02 23:04:12.684	2026-08-02 23:04:12.684	NONE	\N
\.


--
-- Data for Name: PostTag; Type: TABLE DATA; Schema: public; Owner: petrotimes
--

COPY public."PostTag" ("postId", "tagId") FROM stdin;
\.


--
-- Data for Name: SectionPlacement; Type: TABLE DATA; Schema: public; Owner: petrotimes
--

COPY public."SectionPlacement" (id, "sectionId", "postId", "position", "createdAt", "updatedAt") FROM stdin;
cmsu46zbm000xut4k0u2mjm14	cmsddo3p50000utccnjq1xpg3	cmsceqbny000hutfw4r9j2yxn	5	2026-08-15 08:29:04.979	2026-08-15 08:29:04.979
cmsu46zbm000yut4kq52hrtqt	cmsrz4z1x000dutd0g9mglqzs	cmsceqbny000hutfw4r9j2yxn	5	2026-08-15 08:29:04.979	2026-08-15 08:29:04.979
cmsceqbor0013utfw6jy5r459	cmsc69096000butg4v3wssaye	cmsceqbop0011utfwawhtc6ty	2	2026-08-02 23:04:12.46	2026-08-02 23:04:12.46
cmsceqbow0017utfwz32t9yfx	cmsc69096000butg4v3wssaye	cmsceqbot0015utfwy6qcmivm	3	2026-08-02 23:04:12.464	2026-08-02 23:04:12.464
cmsceqbp3001butfwv5dt05hn	cmsc69098000cutg4l08vwngk	cmsceqbp00019utfwd9aqwg5x	1	2026-08-02 23:04:12.471	2026-08-02 23:04:12.471
cmsceqbp8001futfw9hm6gj1q	cmsc69098000cutg4l08vwngk	cmsceqbp5001dutfwe1s6zb81	2	2026-08-02 23:04:12.476	2026-08-02 23:04:12.476
cmsceqbpc001jutfw63h8nc7p	cmsc69098000cutg4l08vwngk	cmsceqbpa001hutfwxpbrd2xr	3	2026-08-02 23:04:12.48	2026-08-02 23:04:12.48
cmsceqbra0033utfw1wh1n3rd	cmsc6909c000futg47vcgk40l	cmsceqbr80031utfwzm825ymy	1	2026-08-02 23:04:12.55	2026-08-02 23:04:12.55
cmsceqbrf0037utfwhbl003of	cmsc6909c000futg47vcgk40l	cmsceqbrd0035utfw3lyuia1d	2	2026-08-02 23:04:12.555	2026-08-02 23:04:12.555
cmsdc5aqz000hutooi5s7i6r1	cmsdc5apf0001utooo1b01zzl	cmsceqboi000xutfw73ddc69c	1	2026-08-03 14:39:38.411	2026-08-03 14:39:38.411
cmsdc5ar2000jutoo83fhzwve	cmsdc5apf0001utooo1b01zzl	cmsceqbop0011utfwawhtc6ty	2	2026-08-03 14:39:38.414	2026-08-03 14:39:38.414
cmsdc5ar5000lutooyfp9nsg8	cmsdc5apf0001utooo1b01zzl	cmsceqbot0015utfwy6qcmivm	3	2026-08-03 14:39:38.417	2026-08-03 14:39:38.417
cmsddo3qn0004utcchiig1ego	cmsddo3p50000utccnjq1xpg3	cmsceqbnk0005utfw7c1abggl	2	2026-08-03 15:22:15.407	2026-08-03 15:22:15.407
cmsddo3qq0006utcc3617rz75	cmsddo3p50000utccnjq1xpg3	cmsceqbnp0009utfwx0kw2tdk	3	2026-08-03 15:22:15.41	2026-08-03 15:22:15.41
cmsddo3qt0008utcc2smt2390	cmsddo3p50000utccnjq1xpg3	cmsceqbnu000dutfwckn3k7sz	4	2026-08-03 15:22:15.413	2026-08-03 15:22:15.413
testplac0000000000000000002	cmsrz4z1x000dutd0g9mglqzs	cmsceqbnk0005utfw7c1abggl	2	2026-08-14 00:12:24.711	2026-08-14 00:12:24.711
testplac0000000000000000003	cmsrz4z1x000dutd0g9mglqzs	cmsceqbnp0009utfwx0kw2tdk	3	2026-08-14 00:12:24.711	2026-08-14 00:12:24.711
testplac0000000000000000004	cmsrz4z1x000dutd0g9mglqzs	cmsceqbnu000dutfwckn3k7sz	4	2026-08-14 00:12:24.711	2026-08-14 00:12:24.711
cmsu44n65000out4kbzmex8h9	cmst7ywef0008ut8o6s52puxq	cmsu3xlnb0000ut4kwvstyclt	1	2026-08-15 08:27:15.917	2026-08-15 08:27:15.917
cmsu44n65000qut4k36dd62ab	cmst7ywed0007ut8o6l8xzttu	cmsu3xlnb0000ut4kwvstyclt	1	2026-08-15 08:27:15.917	2026-08-15 08:27:15.917
cmsu44n65000rut4koza5xk6z	cmsc69096000butg4v3wssaye	cmsu3xlnb0000ut4kwvstyclt	1	2026-08-15 08:27:15.917	2026-08-15 08:27:15.917
cmsu44n65000sut4ko7ob43ob	cmsdc5apf0001utooo1b01zzl	cmsu3xlnb0000ut4kwvstyclt	4	2026-08-15 08:27:15.917	2026-08-15 08:27:15.917
cmsu44n65000tut4kxckb94c6	cmsc6909c000futg47vcgk40l	cmsu3xlnb0000ut4kwvstyclt	3	2026-08-15 08:27:15.917	2026-08-15 08:27:15.917
cmsu44n65000uut4kityhve7n	cmsc69098000cutg4l08vwngk	cmsu3xlnb0000ut4kwvstyclt	4	2026-08-15 08:27:15.917	2026-08-15 08:27:15.917
cmsu44n65000vut4kuxcx0oyw	cmsrz4z1x000dutd0g9mglqzs	cmsu3xlnb0000ut4kwvstyclt	6	2026-08-15 08:27:15.917	2026-08-15 08:27:15.917
cmsu44n65000wut4ke52re30t	cmsddo3p50000utccnjq1xpg3	cmsu3xlnb0000ut4kwvstyclt	6	2026-08-15 08:27:15.917	2026-08-15 08:27:15.917
cmsu49zj70013ut4kajh425ke	cmsddo3p50000utccnjq1xpg3	cmsceqbmm0001utfw6nq1cmtb	1	2026-08-15 08:31:25.22	2026-08-15 08:31:25.22
cmsu49zj70014ut4k010ur4j7	cmsrz4z1x000dutd0g9mglqzs	cmsceqbmm0001utfw6nq1cmtb	1	2026-08-15 08:31:25.22	2026-08-15 08:31:25.22
cmsu49zj70015ut4kbkmrbw7v	cmsc69095000autg4xe47yb12	cmsceqbmm0001utfw6nq1cmtb	1	2026-08-15 08:31:25.22	2026-08-15 08:31:25.22
cmsu49zj70016ut4ks98i1kfb	cmst7ywdq0001ut8o387y6z7c	cmsceqbmm0001utfw6nq1cmtb	1	2026-08-15 08:31:25.22	2026-08-15 08:31:25.22
\.


--
-- Data for Name: Tag; Type: TABLE DATA; Schema: public; Owner: petrotimes
--

COPY public."Tag" (id, name, slug) FROM stdin;
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: petrotimes
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
6a2a40ec-d7ff-4c2e-8f7e-2b15d3d54ecf	300c8d42a6cc6bc21ade8ca5de849d2341d336b6e86daf3973839febbecd0ed1	2026-08-02 22:35:32.639495+03:30	20260731094804_init	\N	\N	2026-08-02 22:35:32.467072+03:30	1
293b3b94-aac8-4fa2-9fad-29f894c7bcb0	f592a2068a767289de77c94244730fa2a83ebd095840071c209fd44914d2dbc5	2026-08-02 22:35:33.629563+03:30	20260802190533_homepage_video_livestream	\N	\N	2026-08-02 22:35:33.55368+03:30	1
\.


--
-- Name: AdminUser AdminUser_pkey; Type: CONSTRAINT; Schema: public; Owner: petrotimes
--

ALTER TABLE ONLY public."AdminUser"
    ADD CONSTRAINT "AdminUser_pkey" PRIMARY KEY (id);


--
-- Name: Category Category_pkey; Type: CONSTRAINT; Schema: public; Owner: petrotimes
--

ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "Category_pkey" PRIMARY KEY (id);


--
-- Name: HomeSection HomeSection_pkey; Type: CONSTRAINT; Schema: public; Owner: petrotimes
--

ALTER TABLE ONLY public."HomeSection"
    ADD CONSTRAINT "HomeSection_pkey" PRIMARY KEY (id);


--
-- Name: LiveStream LiveStream_pkey; Type: CONSTRAINT; Schema: public; Owner: petrotimes
--

ALTER TABLE ONLY public."LiveStream"
    ADD CONSTRAINT "LiveStream_pkey" PRIMARY KEY (id);


--
-- Name: Media Media_pkey; Type: CONSTRAINT; Schema: public; Owner: petrotimes
--

ALTER TABLE ONLY public."Media"
    ADD CONSTRAINT "Media_pkey" PRIMARY KEY (id);


--
-- Name: PostTag PostTag_pkey; Type: CONSTRAINT; Schema: public; Owner: petrotimes
--

ALTER TABLE ONLY public."PostTag"
    ADD CONSTRAINT "PostTag_pkey" PRIMARY KEY ("postId", "tagId");


--
-- Name: Post Post_pkey; Type: CONSTRAINT; Schema: public; Owner: petrotimes
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_pkey" PRIMARY KEY (id);


--
-- Name: SectionPlacement SectionPlacement_pkey; Type: CONSTRAINT; Schema: public; Owner: petrotimes
--

ALTER TABLE ONLY public."SectionPlacement"
    ADD CONSTRAINT "SectionPlacement_pkey" PRIMARY KEY (id);


--
-- Name: Tag Tag_pkey; Type: CONSTRAINT; Schema: public; Owner: petrotimes
--

ALTER TABLE ONLY public."Tag"
    ADD CONSTRAINT "Tag_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: petrotimes
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: AdminUser_email_key; Type: INDEX; Schema: public; Owner: petrotimes
--

CREATE UNIQUE INDEX "AdminUser_email_key" ON public."AdminUser" USING btree (email);


--
-- Name: Category_name_key; Type: INDEX; Schema: public; Owner: petrotimes
--

CREATE UNIQUE INDEX "Category_name_key" ON public."Category" USING btree (name);


--
-- Name: Category_slug_key; Type: INDEX; Schema: public; Owner: petrotimes
--

CREATE UNIQUE INDEX "Category_slug_key" ON public."Category" USING btree (slug);


--
-- Name: HomeSection_key_key; Type: INDEX; Schema: public; Owner: petrotimes
--

CREATE UNIQUE INDEX "HomeSection_key_key" ON public."HomeSection" USING btree (key);


--
-- Name: Media_key_key; Type: INDEX; Schema: public; Owner: petrotimes
--

CREATE UNIQUE INDEX "Media_key_key" ON public."Media" USING btree (key);


--
-- Name: Post_categoryId_status_publishedAt_idx; Type: INDEX; Schema: public; Owner: petrotimes
--

CREATE INDEX "Post_categoryId_status_publishedAt_idx" ON public."Post" USING btree ("categoryId", status, "publishedAt");


--
-- Name: Post_slug_key; Type: INDEX; Schema: public; Owner: petrotimes
--

CREATE UNIQUE INDEX "Post_slug_key" ON public."Post" USING btree (slug);


--
-- Name: Post_status_publishedAt_idx; Type: INDEX; Schema: public; Owner: petrotimes
--

CREATE INDEX "Post_status_publishedAt_idx" ON public."Post" USING btree (status, "publishedAt");


--
-- Name: Post_views_idx; Type: INDEX; Schema: public; Owner: petrotimes
--

CREATE INDEX "Post_views_idx" ON public."Post" USING btree (views);


--
-- Name: SectionPlacement_postId_idx; Type: INDEX; Schema: public; Owner: petrotimes
--

CREATE INDEX "SectionPlacement_postId_idx" ON public."SectionPlacement" USING btree ("postId");


--
-- Name: SectionPlacement_sectionId_position_key; Type: INDEX; Schema: public; Owner: petrotimes
--

CREATE UNIQUE INDEX "SectionPlacement_sectionId_position_key" ON public."SectionPlacement" USING btree ("sectionId", "position");


--
-- Name: Tag_name_key; Type: INDEX; Schema: public; Owner: petrotimes
--

CREATE UNIQUE INDEX "Tag_name_key" ON public."Tag" USING btree (name);


--
-- Name: Tag_slug_key; Type: INDEX; Schema: public; Owner: petrotimes
--

CREATE UNIQUE INDEX "Tag_slug_key" ON public."Tag" USING btree (slug);


--
-- Name: PostTag PostTag_postId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: petrotimes
--

ALTER TABLE ONLY public."PostTag"
    ADD CONSTRAINT "PostTag_postId_fkey" FOREIGN KEY ("postId") REFERENCES public."Post"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: PostTag PostTag_tagId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: petrotimes
--

ALTER TABLE ONLY public."PostTag"
    ADD CONSTRAINT "PostTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES public."Tag"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Post Post_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: petrotimes
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Post Post_homeImageId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: petrotimes
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_homeImageId_fkey" FOREIGN KEY ("homeImageId") REFERENCES public."Media"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Post Post_innerImageId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: petrotimes
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_innerImageId_fkey" FOREIGN KEY ("innerImageId") REFERENCES public."Media"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Post Post_ogImageId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: petrotimes
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_ogImageId_fkey" FOREIGN KEY ("ogImageId") REFERENCES public."Media"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: SectionPlacement SectionPlacement_postId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: petrotimes
--

ALTER TABLE ONLY public."SectionPlacement"
    ADD CONSTRAINT "SectionPlacement_postId_fkey" FOREIGN KEY ("postId") REFERENCES public."Post"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: SectionPlacement SectionPlacement_sectionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: petrotimes
--

ALTER TABLE ONLY public."SectionPlacement"
    ADD CONSTRAINT "SectionPlacement_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES public."HomeSection"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

\unrestrict 3OEYnvtaBVeJejre0N3eO6Pa4FqYPWMcgf8LPJpvKde8Dc1bKzEMuwhdtEXe19i

