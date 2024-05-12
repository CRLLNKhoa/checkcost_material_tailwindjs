"use server";
import createSupabaseServerClient from "@/libs/supabse";
import { currentUser } from "@clerk/nextjs/server";

export async function getLog() {
  try {
    const supabase = await createSupabaseServerClient();
    const user = await currentUser();
    const { data, error } = await supabase
      .from("log")
      .select("*")
      .eq("player", user?.username);
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function getDetailLog(id) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.from("log").select("*").eq("id", id);
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function getAllLog(page) {
  try {
    const supabase = await createSupabaseServerClient();
    const startIndex = (page - 1) * 12;
    var endIndex = startIndex + 12;
    const { data: log } = await supabase.from("log").select("id");
    const { data, error } = await supabase
      .from("log")
      .select("*")
      .range(startIndex, endIndex - 1)
      .order("created_at", { ascending: false });
    if (error) {
      return { status: 400, data: [error] };
    } else
      return { status: 200, data: data, count: log?.length, currentPage: page };
  } catch (error) {
    console.log(error);
  }
}

export async function addLog(newLog) {
  try {
    const supabase = await createSupabaseServerClient();
    const user = await currentUser();
    const { data, error } = await supabase
      .from("log")
      .insert([{ ...newLog, player: user?.username || "Idol ẩn danh" }])
      .select("*");
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function updateLog(id,newdata) {
  try {
    const supabase = await createSupabaseServerClient();
    const {data, error } = await supabase
      .from("log")
      .update(newdata)
      .eq("id", id)
      .select("*");
    if (error) {
      return { status: 400 };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function deleteLog(id) {
  try {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.from("log").delete().eq("id", id);
    if (error) {
      return { status: 400 };
    } else return { status: 200 };
  } catch (error) {
    console.log(error);
  }
}

export async function getLogs(player) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("log")
      .select("*")
      .eq("player", player);
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function getLogined() {
  try {
    const user = await currentUser();
    if (!user) {
      return { status: 400, isLogin: false };
    } else return { status: 200, isLogin: true };
  } catch (error) {
    console.log(error);
  }
}

export async function getLogHomePage() {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("log")
      .select("*")
      .limit(6)
      .order("created_at", { ascending: false });
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function addCmt(content, id, currentCMT) {
  try {
    const supabase = await createSupabaseServerClient();
    const user = await currentUser();
    const { data, error } = await supabase
      .from("cmt")
      .insert([
        {
          content: content,
          log_id: id,
          name: user?.username || "Idol ẩn danh",
          avatar: user?.imageUrl,
        },
      ])
      .select("*");
      const update = await supabase
      .from("log")
      .update({cmt: currentCMT + 1})
      .eq("id", id)
      .select();
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function getCmts(id) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("cmt")
      .select("*")
      .eq("log_id", id);
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function addTeam(newTeam) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("team")
      .insert([newTeam])
      .select("*");
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function getTeams() {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.from("team").select("*");
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function getTeams6() {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.from("team").select("*").limit(6);
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}
