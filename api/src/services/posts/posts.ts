import type { Prisma } from '@prisma/client'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const posts: QueryResolvers['posts'] = () => {
  return db.post.findMany()
}

export const post: QueryResolvers['post'] = ({
  id,
}: Prisma.PostWhereUniqueInput) => {
  return db.post.findUnique({
    where: { id },
  })
}

interface CreatePostArgs {
  input: Prisma.PostCreateInput
}

export const createPost: MutationResolvers['createPost'] = ({
  input,
}: CreatePostArgs) => {
  return db.post.create({
    data: input,
  })
}

interface UpdatePostArgs extends Prisma.PostWhereUniqueInput {
  input: Prisma.PostUpdateInput
}

export const updatePost: MutationResolvers['updatePost'] = ({
  id,
  input,
}: UpdatePostArgs) => {
  return db.post.update({
    data: input,
    where: { id },
  })
}

export const deletePost: MutationResolvers['deletePost'] = ({ id }) => {
  return db.post.delete({
    where: { id },
  })
}
