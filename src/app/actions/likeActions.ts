'user server';

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

async function toggleLikeMember(targetUserId: string, isLiked: boolean) {
    try {
        const userId = await getAuthUserId();

        if (isLiked) {
            await prisma.like.delete({
                where: {
                    sourceUserId_targetUserId: {
                        sourceUserId: userId,
                        targetUserId
                    }
                }
            })
        } else {
            await prisma.like.create({
                data: {
                    sourceUserId: userId,
                    targetUserId
                }
            })
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function fetchCurrentUserLikeIds() {
    try {
        const userId = getAuthUserId();
        
        const likeIds = await prisma.like.findMany({
            where: {
                sourceUserId: userId
            },
            select: {
                targetUserId: true
            }
        })

        return likeIds.map(like => like.targetUserId);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

function getAuthUserId(): any {
    throw new Error("Function not implemented.");
}
