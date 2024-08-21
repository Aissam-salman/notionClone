"use client";

import { Doc } from "@/convex/_generated/dataModel";
import React, { useState } from "react";
import useOrigin from "@/hooks/use-origin";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import {
  Popover, PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Check, Copy, Globe} from "lucide-react";
import {Input} from "@/components/ui/input";

interface PublishProps {
  initialData: Doc<"documents">;
}

const Publish = ({ initialData }: PublishProps) => {
  const origin = useOrigin();
  const update = useMutation(api.documents.update);

  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const url = `${origin}/preview/${initialData._id}`;

  const onPublish = () => {
    setIsSubmitted(true);
    const promise = update({
      id: initialData._id,
      isPublished: true,
    }).finally(() => setIsSubmitted(false));

    toast.promise(promise, {
      loading: "Publishing...",
      success: "Note published!",
      error: "Failed to publish note.",
    });
  };

const onUnPublish = () => {
    setIsSubmitted(true);
    const promise = update({
      id: initialData._id,
      isPublished: false,
    }).finally(() => setIsSubmitted(false));

    toast.promise(promise, {
      loading: "Unpublishing...",
      success: "Note Unpublished!",
      error: "Failed to unpublish note.",
    });
  };

  const onCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000)
  }

  return (
      <Popover>
        <PopoverTrigger asChild>
          <Button size="sm" variant="ghost">
            Publish
            {initialData.isPublished && (
                <Globe
                  className="text-sky-500 w-4 h-4 ml-2"
                />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-72"
          align="end"
          alignOffset={8}
          forceMount
        >
          {initialData.isPublished ? (
              <div className={"space-y-4"}>
                <div className="flex items-center gap-x-2">
                  <Globe className={"text-sky-500 animate-pulse h-4 w-4"} />
                  <p className={"text-xs font-medium text-sky-500"}>
                    This note is live on web.
                  </p>
                </div>
                <div className={"flex items-center"}>
                  <Input
                      className={"flex-1 px-2 text-xs border rounded-l-md h-8 bg-muted truncate"}
                      value={url}
                      disabled
                  />
                  <Button
                    onClick={onCopy}
                    disabled={copied}
                    className={"h-8 rounded-l-none"}
                  >
                    {copied ? (
                        <Check className={"h-4 w-4"} />
                    ) : (
                        <Copy className={"h4 w-4"} />
                    )}
                  </Button>
                </div>
                <Button
                    size={"sm"}
                    className={"w-full text-xs"}
                    disabled={isSubmitted}
                    onClick={onUnPublish}
                >
                  Unpublish
                </Button>
              </div>
          ) : (
              <div className="flex flex-col items-center justify-center">
                <Globe className={"h-8 w-8 text-muted-foreground mb-2"} />
                <p className="text-sm font-medium mb-2">Publish this note</p>
                <span className="text-xs text-muted-foreground mb-4">
                  Share your work with others.
                </span>
                <Button
                  disabled={isSubmitted}
                  onClick={onPublish}
                  className={"w-full text-xs"}
                  size={"sm"}
                >
                  Publish
                </Button>
              </div>
          )}
        </PopoverContent>
      </Popover>
  )
};

export default Publish;
