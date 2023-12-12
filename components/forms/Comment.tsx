"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useUploadThing } from "@/lib/uploadThing";

import { CommentValidation } from "@/lib/validations/thread";
import { addCommentToThread } from "@/lib/actions/thread.actions";
// import { createThred } from "@/lib/actions/thread.actions";
// import { updateUser } from "@/lib/actions/user.actions";

interface Props {
  threadId: string;
  currentUserImage: string;
  currentUserId: string;
}

const Comment = ({ threadId, currentUserImage, currentUserId }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing("media");

  const form = useForm({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      thread: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
    await addCommentToThread(
      threadId,
      values.thread,
      JSON.parse(currentUserId),
      pathname
    );

    form.reset();
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="comment-form ">
        <FormField
          name="thread"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex gap-3 items-center w-full">
              <FormLabel>
                <Image
                  src={currentUserImage}
                  alt="profile_photo"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                ></Image>
              </FormLabel>
              <FormControl className="border-none bg-transparent">
                <Input
                  type="text"
                  className="no-focus text-light-1 outline-none"
                  placeholder="Comment..."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        ></FormField>

        <Button type="submit" className="comment-form_btn">
          Reply
        </Button>
      </form>
    </Form>
  );
};
export default Comment;
