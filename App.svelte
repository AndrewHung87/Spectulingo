<script>
    import { createUser } from "./database.js";

    let username = "";
    let password = "";
    let error = "";

    async function handleSubmit(event) {
        event.preventDefault();

        //Validate input data
        if (!username || !password || !email) {
            error = "Please enter a username and password.";
            return;
        }
        //Create Account if non-existent
        try {
            const userId = await createUser(username, password);
            error = "";
            alert(`Account created with ID ${userId}`);
        } catch (err) {
            error = "Error creating account. Please try again later.";
        }
    }
</script>

<h1 id="title">SpecuLingo</h1>

<form on:submit={handelSubmit}>
    <label for="name"> Username:</label>
    <input type="name" id="name" bind:value={username} />

    <label for="password"> Password</label>
    <input type="password" id="password" bind:value={password} />

    {#if error}
        <p>{error}</p>
    {/if}
</form>

<button on:click={submit}> Log In </button>

<button type="submit"> Create Account </button>

