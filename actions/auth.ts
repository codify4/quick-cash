'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server';

export async function oAuthSignIn() {
    const supabase = await createClient();
  
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    });
  
    if(error){
        return redirect('/signin?message=Could not authenticate');
    }
  
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

