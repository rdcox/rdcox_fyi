import About from "@/models/about";
import { supabase } from "./supabase";
import Contact from "@/models/contact";
import Experience from "@/models/experience";

export async function getAboutMe(): Promise<About> {
    let { data: about } = await supabase.from("about").select().limit(1).single();
    return {
        id: about.id,
        name: about.name,
        tag: about.tag,
        subTag: about.sub_tag,
        aboutMe: about.about_me,
    };
}
  
export async function getContactInfo(): Promise<Contact[]> {
    let { data: contact } = await supabase.from("contact").select();
    if (!contact) return [];
    return <Array<Contact>>contact;
}
  
export async function getExperiences(): Promise<Experience[]> {
    const { data: experience } = await supabase.from("experience").select();
    return <Array<Experience>>experience;
}
  
export async function getSkills() {
    const { data: skills } = await supabase.from("skills").select();
    return skills;
}

export async function getResumeData() {
    const aboutMeProm = getAboutMe();
    const contactProm = getContactInfo();
    const experienceProm = getExperiences();
    const skillsProm = getSkills();
    const [about, contact, experience, skills] = await Promise.all([aboutMeProm, contactProm, experienceProm, skillsProm]);

    return { about, contact, experience, skills };
}