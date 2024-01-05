<script>
  import Banner from "$lib/components/Banner.svelte";
  let bannerTitle = "This is banner title of Contact";
  let bannerText =
    "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Esunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt  ";

  let name = "";
  let email = "";
  let message = "";
  let errors = {};

  function validateForm() {
    errors = {};

    // Validate Name
    if (!name.trim()) {
      errors.name = "Name is required";
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      errors.email = "Enter a valid email address";
    }

    // Validate Message
    if (!message.trim()) {
      errors.message = "Message is required";
    }

    // Check if there are any errors
    return Object.keys(errors).length === 0;
  }

  function handleSubmit() {
    if (validateForm()) {
      // Perform form submission logic here
      console.log("Form submitted successfully");
    } else {
      console.log("Form has validation errors");
    }
  }
</script>

<Banner {bannerTitle} {bannerText} />
<div class="autoContent pt-4 pb-4">
  <form on:submit|preventDefault={handleSubmit} class="mt-4 mb-4">
    <div class="mb-3">
      <label for="name" class="form-label">Name:</label>
      <input type="text" class="form-control" id="name" bind:value={name} />
      {#if errors.name}<p class="text-danger">{errors.name}</p>{/if}
    </div>

    <div class="mb-3">
      <label for="email" class="form-label">Email:</label>
      <input type="email" class="form-control" id="email" bind:value={email} />
      {#if errors.email}<p class="text-danger">{errors.email}</p>{/if}
    </div>

    <div class="mb-3">
      <label for="message" class="form-label">Message:</label>
      <textarea class="form-control" id="message" bind:value={message}
      ></textarea>
      {#if errors.message}<p class="text-danger">{errors.message}</p>{/if}
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
