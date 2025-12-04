// Supabase Configuration
const supabaseUrl = "https://tjckfjppvwzfavvtqvsl.supabase.co";
const supabaseKey = "sb_publishable_3mhJRghTOZafGf5A6vXF5w_tYW1-H2j";


const { createClient } = supabase;
const supabaseClient = createClient(supabaseUrl, supabaseKey);

// Authentication helper functions
async function checkAuth() {
    const {
        data: { session },
        error,
    } = await supabaseClient.auth.getSession();
    if (error) {
        console.error("Error checking auth:", error);
        return null;
    }
    return session;
}

async function getCurrentUser() {
    const {
        data: { user },
        error,
    } = await supabaseClient.auth.getUser();
    if (error) {
        console.error("Error getting user:", error);
        return null;
    }
    return user;
}

async function signOut() {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
        console.error("Error signing out:", error);
        return false;
    }
    return true;
}


