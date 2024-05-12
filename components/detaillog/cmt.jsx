"use client";
import { addCmt, getCmts } from "@/actions/logAction";
import { useUser } from "@clerk/nextjs";
import { Textarea, Button, IconButton } from "@material-tailwind/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export function CommentBoxTextarea({countCmt}) {
  const [content, setContent] = useState("");
  const [listCmt, setListCmt] = useState();
  const [loading,setLoading] = useState(false)
  const params = useParams();
  const {isSignedIn} = useUser()

  const handleCmt = async () => {
    setLoading(true)
    if (content.length < 10 || content.length > 500) {
      alert("Bình luận ít nhất 10 ký tự và tối đa 500!");
      setLoading(false)
    } else {
      const result = await addCmt(content, Number(params?.id),countCmt);
      if (result?.status === 200) {
        setListCmt([...listCmt, result?.data[0]]);
        setContent("");
        setLoading(false)
      }
    }
  };

  useEffect(() => {
    const get = async () => {
      const result = await getCmts(Number(params?.id));
      if (result?.status === 200) {
        setListCmt(result?.data);
      }
    };
    get();
  }, []);

  return (
    <div className="relative">
      <Textarea value={content} onChange={(e) => setContent(e.target.value)} label="Bình luận (đăng nhập để bình luận)" rows={4} />
      <div className="flex w-full justify-between py-1.5">
        <IconButton variant="text" color="blue-gray" size="sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
        </IconButton>
        <div className="flex gap-2">
          <Button onClick={() => setContent("")} size="sm" color="red" variant="text" className="rounded-md">
            xóa
          </Button>
          {isSignedIn && <Button loading={loading} onClick={handleCmt} size="sm" className="rounded-md">
            Thêm bình luận
          </Button>}
        </div>
      </div>
      <div className="flex flex-col justify-start items-start mt-8 rounded-lg p-2 gap-3">
        <div className="flex bg-green-500 select-none flex-wrap rounded-full text-white p-2 px-4 items-center gap-y-1 gap-x-4">
          <h2 className="text-md italic">@Admin:</h2>
          <p className="text-sm">Cảm ơn bạn đã đóng góp ❤️</p>
        </div>
        {listCmt?.map((item,index) => (
          <div key={index} className=" select-none bg-blue-400 rounded-full flex flex-wrap text-white px-4 p-2 items-center gap-y-1 gap-x-4">
            <h2 className="text-md italic">@{item?.name}:</h2>
            <p className="text-sm">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
