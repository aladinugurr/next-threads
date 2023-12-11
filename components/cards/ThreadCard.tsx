interface Props {
  id: string;
  currentUserId: string;
  parentId: string | null;
  content: string;
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  comments: {
    author: {
      image: string;
    };
  }[];
  createdAt: Date;
  author: {
    name: string;
    image: string;
    id: string;
  };
  isComment: boolean;
}

const ThreadCard = ({
  id,
  currentUserId,
  parentId,
  content,
  community,
  comments,
  createdAt,
  author,
  isComment,
}: Props) => {
  return <div></div>;
};

export default ThreadCard;
