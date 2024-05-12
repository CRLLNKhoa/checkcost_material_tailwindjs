import React, { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import { Choiceteam } from "./choicehero";
import Imgheroselect from "./imgheroselect";
import { addLog } from "@/actions/logAction";

export function Draweradd({list, setList}) {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [day, setDay] = useState();
  const [team, setTeam] = useState([]);
  const [em, setEm] = useState();
  const [bd, setBd] = useState();
  const [up, setUp] = useState();
  const [hl, setHl] = useState();
  const [ins, setIns] = useState();
  const [ms, setMs] = useState();
  const [bs, setBs] = useState();
  const [cc, setCc] = useState(null);
  const [mana, setMana] = useState(null);
  const [heal, setHeal] = useState(null);
  const [crit, setCrit] = useState({
    lv: "",
    unl: "",
  });
  const [dame, setDame] = useState({
    lv: "",
    unl: "",
  });
  const [hero, setHero] = useState({
    lv: "",
    unl: "",
  });
  const [wt, setWt] = useState();
  const [note, setNote] = useState();
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const handleAdd = async () => {
    if (
      day > 0 &&
      team.length > 0 &&
      em !== "" &&
      bd !== "" &&
      up !== "" &&
      ins !== "" &&
      ms !== "" &&
      hl !== "" &&
      bs !== "" &&
      crit.lv !== "" &&
      crit.unl !== "" &&
      dame.lv !== "" &&
      dame.unl !== "" &&
      hero.lv !== "" &&
      hero.unl !== "" &&
      cc !== "" &&
      heal !== "" &&
      mana !== ""
    ) {
      setIsLoading(true);
      const result = await addLog({
        em,
        bd,
        up,
        in: ins,
        ms,
        hl,
        bs,
        crit: { lv: crit.lv, lvUnl: crit.unl },
        dame: { lv: dame.lv, lvUnl: dame.unl },
        hero: { lv: hero.lv, lvUnl: hero.unl },
        cc,
        heal,
        team,
        day,
        wt,
        mana,
        note
      });
      if (result?.status === 200) {
        setIsLoading(false);
        alert("Thêm thành công!");
        setList([...list, result?.data[0]])
        setDay(0);
      }
    } else {
      alert("Nhập chưa đủ thông tin!");
    }
  };

  return (
    <React.Fragment>
      <Button
        disabled={!list}
        onClick={openDrawer}
        className="flex items-center gap-3 ml-auto"
        size="lg"
      >
        <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Thêm nhật ký
      </Button>
      <Drawer
        open={open}
        onClose={closeDrawer}
        size={420}
        placement="right"
        className="shadow-lg p-4 flex flex-col justify-between"
      >
        <div className="border-b flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Thêm mới
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="flex flex-col gap-4 justify-start overflow-auto pr-4 pt-4 block_edit">
          <div className="w-1/2">
            <Input
              type="number"
              label="DAY"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
          </div>
          <Input
            value={em}
            onChange={(e) => setEm(e.target.value)}
            label="Level EM"
            icon={<img src="/skill/empng.png" />}
          />
          <Input
            value={bd}
            onChange={(e) => setBd(e.target.value)}
            label="Level BD"
            icon={<img src="/skill/bdpng.png" />}
          />
          <Input
            value={up}
            onChange={(e) => setUp(e.target.up)}
            label="Level UP"
            icon={<img src="/skill/uppng.png" />}
          />
          <Input
            value={ins}
            onChange={(e) => setIns(e.target.value)}
            label="Level INS"
            icon={<img src="/skill/inspng.png" />}
          />
          <Input
            value={ms}
            onChange={(e) => setMs(e.target.value)}
            label="Level MS"
            icon={<img src="/skill/mspng.png" />}
          />
          <Input
            value={bs}
            onChange={(e) => setBs(e.target.value)}
            label="Level BS"
            icon={<img src="/skill/bspng.png" />}
          />
          <Input
            value={hl}
            onChange={(e) => setHl(e.target.value)}
            label="Level HL"
            icon={<img src="/skill/hlpng.png" />}
          />
          <Input
            value={crit.lv}
            onChange={(e) => setCrit({ ...crit, lv: e.target.value })}
            label="Level RUNE"
            icon={<img src="/runes/crit.webp" />}
          />
          <Input
            value={crit.unl}
            onChange={(e) => setCrit({ ...crit, unl: e.target.value })}
            label="Level UNL"
            icon={<img src="/runes/crit.webp" />}
          />
          <Input
            value={dame.lv}
            onChange={(e) => setDame({ ...dame, lv: e.target.value })}
            label="Level RUNE"
            icon={<img src="/runes/dame.webp" />}
          />
          <Input
            value={dame.unl}
            onChange={(e) => setDame({ ...dame, unl: e.target.value })}
            label="Level UNL"
            icon={<img src="/runes/dame.webp" />}
          />
          <Input
            value={hero.lv}
            onChange={(e) => setHero({ ...hero, lv: e.target.value })}
            label="Level RUNE"
            icon={<img src="/runes/hero.webp" />}
          />
          <Input
            value={hero.unl}
            onChange={(e) => setHero({ ...hero, unl: e.target.value })}
            label="Level UNL"
            icon={<img src="/runes/hero.webp" />}
          />
          <Input
            value={heal}
            onChange={(e) => setHeal(e.target.value)}
            label="Level RUNE"
            icon={<img src="/runes/heal.webp" />}
          />
          <Input
            value={cc}
            onChange={(e) => setCc(e.target.value)}
            label="Level RUNE"
            icon={<img src="/runes/cc.webp" />}
          />
          <Input
            value={mana}
            onChange={(e) => setMana(e.target.value)}
            label="Level RUNE"
            icon={<img src="/runes/mana.webp" />}
          />
          <div className="border p-4 rounded-md border-[#b0bec5] flex items-center flex-col flex-wrap">
            <div className="flex items-center justify-between w-full mb-2">
                <h2>Đội hình</h2>
                <Choiceteam team={team} setTeam={setTeam} />
            </div>
            <div className="flex items-center justify-between gap-2">
                {team?.map(item => (
                     <Imgheroselect team={team} setTeam={setTeam} idhero={item} />
                ))}
            </div>
          </div>
          <Textarea
            value={wt}
            onChange={(e) => setWt(e.target.value)}
            size="md"
            label="WORLD TREE"
            placeholder="Vui lòng dinh dạng: GW2 BT4 AC3"
          />
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            size="md"
            label="GHI CHÚ"
          />
        </div>
        <Button onClick={handleAdd} loading={isLoading} className="mt-2 h-20" size="sm">
          Thêm mới
        </Button>
      </Drawer>
    </React.Fragment>
  );
}
