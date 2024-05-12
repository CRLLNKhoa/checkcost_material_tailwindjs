"use server";
import createSupabaseServerClient from "@/libs/supabse";
import { currentUser } from "@clerk/nextjs/server";

function getCurrentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  return dd + "/" + mm + "/" + yyyy;
}

export async function getGiftData() {
  try {
    const supabase = await createSupabaseServerClient();
    const user = await currentUser();
    const { data, error } = await supabase
      .from("gift")
      .select("*")
      .eq("user_id", user?.id);
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function addGiftData() {
  try {
    var currentDate = getCurrentDate();
    const supabase = await createSupabaseServerClient();
    const user = await currentUser();
    const { data, error } = await supabase
      .from("gift")
      .insert([{ user_id: user?.id, next_time: currentDate, current_ruby: 0 }])
      .select("*");
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function addGifted(newData) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("history_gift")
      .insert([newData])
      .select("*");
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function updateGiftData(newData) {
  try {
    const supabase = await createSupabaseServerClient();
    const user = await currentUser();
    const { data, error } = await supabase
      .from("gift")
      .update(newData)
      .eq("user_id", user?.id)
      .select();
    console.log({ status: 400, data: [error] })
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}


export async function getGiftList() {
    try {
      const supabase = await createSupabaseServerClient();
      const { data, error } = await supabase
        .from("history_gift")
        .select("*").limit(8).order("created_at", {ascending: false})
      if (error) {
        return { status: 400, data: [error] };
      } else return { status: 200, data: data };
    } catch (error) {
      console.log(error);
    }
  }