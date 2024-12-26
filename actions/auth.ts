'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server';

export async function GoogleSignIn() {
    const supabase = await createClient();
  
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    });

    const { data } = await supabase.auth.getUser();
    console.log(data); 
  
    if(error){
        return redirect('/signin?message=Could not authenticate');
    }

    console.log('Signed in');
  
    redirect('/dashboard');
}

export async function logOut() {
    const supabase = await createClient();
    let { error } = await supabase.auth.signOut();

    if(error){
        return redirect('/dashboard?message=Could not log out');
    }
    
    redirect('/signin');
}