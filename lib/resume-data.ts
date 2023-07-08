import { supabase } from "./supabase";

export async function getAboutMe() {
    let { data: about } = await supabase.from("about").select().limit(1).single();
    return about;
}
  
export async function getContactInfo() {
    let { data: contact } = await supabase.from("contact").select();
    return contact;
}
  
export async function getExperiences() {
    const { data: experience } = await supabase.from("experience").select();
    return experience;
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