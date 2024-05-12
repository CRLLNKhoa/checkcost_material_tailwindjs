import React, { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import Imghero from "../layouts/loglist/imghero";
import { Choiceteam } from "./choicehero";
import { updateLog } from "@/actions/logAction";
import Toast from "@/libs/toast";

export function Draweredit({ data, list, setList }) {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [day, setDay] = useState(data?.day);
  const [team, setTeam] = useState(data.team);
  const [em, setEm] = useState(data.em);
  const [bd, setBd] = useState(data.bd);
  const [up, setUp] = useState(data.up);
  const [hl, setHl] = useState(data.hl);
  const [ins, setIns] = useState(data.in);
  const [ms, setMs] = useState(data.ms);
  const [bs, setBs] = useState(data.bs);
  const [cc, setCc] = useState(data.cc);
  const [mana, setMana] = useState(data.mana);
  const [heal, setHeal] = useState(data.heal);
  const [crit, setCrit] = useState({
    lv: data.crit.lv,
    unl: data.crit.lvUnl,
  });
  const [dame, setDame] = useState({
    lv: data.dame.lv,
    unl: data.dame.lvUnl,
  });
  const [hero, setHero] = useState({
    lv: data.hero.lv,
    unl: data.hero.lvUnl,
  });
  const [wt, setWt] = useState(data.wt);
  const [note, setNote] = useState(data?.note);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const handleUpdate = async () => {
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
      const result = await updateLog(data.id, {
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
        closeDrawer()
        Toast.fire({
          icon: "success",
          text: "Cập nhật thành công !"
        })
        const newlist = list.filter(item => item?.id !== data?.id)
        setList([...newlist, result.data[0]])
      }
    } else {
      alert("Nhập chưa đủ thông tin!");
    }
  };

  return (
    <React.Fragment>
      <Button onClick={openDrawer} size="sm" color="blue">
        Chỉnh sửa
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
            Chỉnh sửa
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
              placeholder={data.day}
            />
          </div>
          <Input
            value={em}
            onChange={(e) => setEm(e.target.value)}
            label="Level EM"
            icon={<img src="/skill/empng.png" />}
            placeholder={data.em}
          />
          <Input
            value={bd}
            onChange={(e) => setBd(e.target.value)}
            label="Level BD"
            icon={<img src="/skill/bdpng.png" />}
            placeholder={data.bd}
          />
          <Input
            value={up}
            onChange={(e) => setUp(e.target.up)}
            label="Level UP"
            icon={<img src="/skill/uppng.png" />}
            placeholder={data.up}
          />
          <Input
            value={ins}
            onChange={(e) => setIns(e.target.value)}
            label="Level INS"
            icon={<img src="/skill/inspng.png" />}
            placeholder={data.in}
          />
          <Input
            value={ms}
            onChange={(e) => setMs(e.target.value)}
            label="Level MS"
            icon={<img src="/skill/mspng.png" />}
            placeholder={data.ms}
          />
          <Input
            value={bs}
            onChange={(e) => setBs(e.target.value)}
            label="Level BS"
            icon={<img src="/skill/bspng.png" />}
            placeholder={data.bs}
          />
          <Input
            value={hl}
            onChange={(e) => setHl(e.target.value)}
            label="Level HL"
            icon={<img src="/skill/hlpng.png" />}
            placeholder={data.hl}
          />
          <Input
            value={crit.lv}
            onChange={(e) => setCrit({ ...crit, lv: e.target.value })}
            label="Level RUNE"
            icon={<img src="/runes/crit.webp" />}
            placeholder={data.crit.lv}
          />
          <Input
            value={crit.unl}
            onChange={(e) => setCrit({ ...crit, unl: e.target.value })}
            label="Level UNL"
            icon={<img src="/runes/crit.webp" />}
            placeholder={data.crit.lnUnl}
          />
          <Input
            value={dame.lv}
            onChange={(e) => setDame({ ...dame, lv: e.target.value })}
            label="Level RUNE"
            icon={<img src="/runes/dame.webp" />}
            placeholder={data.dame.lv}
          />
          <Input
            value={dame.unl}
            onChange={(e) => setDame({ ...dame, unl: e.target.value })}
            label="Level UNL"
            icon={<img src="/runes/dame.webp" />}
            placeholder={data.dame.lvUnl}
          />
          <Input
            value={hero.lv}
            onChange={(e) => setHero({ ...hero, lv: e.target.value })}
            label="Level RUNE"
            icon={<img src="/runes/hero.webp" />}
            placeholder={data.hero.lv}
          />
          <Input
            value={hero.unl}
            onChange={(e) => setHero({ ...hero, unl: e.target.value })}
            label="Level UNL"
            icon={<img src="/runes/hero.webp" />}
            placeholder={data.hero.lvUnl}
          />
          <Input
            value={heal}
            onChange={(e) => setHeal(e.target.value)}
            label="Level RUNE"
            icon={<img src="/runes/heal.webp" />}
            placeholder={data.heal}
          />
          <Input
            value={cc}
            onChange={(e) => setCc(e.target.value)}
            label="Level RUNE"
            icon={<img src="/runes/cc.webp" />}
            placeholder={data?.cc}
          />
          <Input
            value={mana}
            onChange={(e) => setMana(e.target.value)}
            label="Level RUNE"
            icon={<img src="/runes/mana.webp" />}
            placeholder={data?.mana}
          />
          <div className="border p-4 rounded-md border-[#b0bec5] flex items-center flex-col flex-wrap">
            <div className="flex items-center justify-between w-full mb-2">
              <h2>Đội hình</h2>
              <Choiceteam team={team} setTeam={setTeam} />
            </div>
            <div className="flex items-center justify-between gap-2">
              {team?.map((item) => (
                <Imghero idhero={item} />
              ))}
            </div>
          </div>
          <Textarea
            value={wt}
            onChange={(e) => setWt(e.target.value)}
            size="md"
            label="WORLD TREE"
            placeholder={data.wt}
          />
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            size="md"
            label="GHI CHÚ"
            placeholder={data?.note}
          />
        </div>
        <Button loading={isLoading} onClick={handleUpdate} className="mt-2 h-20" size="sm">
          Lưu lại
        </Button>
      </Drawer>
    </React.Fragment>
  );
}
