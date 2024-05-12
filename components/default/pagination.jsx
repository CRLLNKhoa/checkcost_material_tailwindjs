import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
 
export function Pagination({totalPage,currentPage = 1}) {
  const [active, setActive] = React.useState(currentPage);
  const router = useRouter()
 
  const next = () => {
    if (active === totalPage) return;
    router.push(`/logs?page=${active + 1}`)
    setActive(active + 1);
  };
 
  const prev = () => {
    if (active === 1) return;
    router.push(`/logs?page=${active - 1}`)
    setActive(active - 1);
  };
 
  return (
    <div className="flex items-center gap-8">
      <IconButton
        size="sm"
        variant="outlined"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="gray" className="font-normal">
        Page <strong className="text-gray-900">{active}</strong> of{" "}
        <strong className="text-gray-900">{totalPage}</strong>
      </Typography>
      <IconButton
        size="sm"
        variant="outlined"
        onClick={next}
        disabled={active === 10}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
  );
}