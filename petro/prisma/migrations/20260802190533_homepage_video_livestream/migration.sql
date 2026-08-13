-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "homepageVideoType" "VideoType" NOT NULL DEFAULT 'NONE',
ADD COLUMN     "homepageVideoUrl" TEXT;

-- CreateTable
CREATE TABLE "LiveStream" (
    "id" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL DEFAULT 'پخش زنده',
    "aparatUrl" TEXT NOT NULL DEFAULT '',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LiveStream_pkey" PRIMARY KEY ("id")
);
