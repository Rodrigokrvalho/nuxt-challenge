<template>
  <div class="">
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="primary"
    >
      <b-navbar-brand>
        <img
          src="compayz-logo.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt="Logo"
        >
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse">aqui</b-navbar-toggle>

      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <fa icon="headset" />
              <span>Atendimento</span>
            </template>
            <b-dropdown-item href="#">Link 1</b-dropdown-item>
            <b-dropdown-item href="#">Link 2</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <template #button-content>
              <fa icon="user" />
              Minha Conta
            </template>
            <b-dropdown-item href="#">Link 1</b-dropdown-item>
            <b-dropdown-item href="#">Link 2</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <aside class="sidebar bg-primary col-sm-1">
      <ul class="list-unstyled ">
        <li class="text-center text-white-50 ">
          <fa
            icon="laptop"
            size="lg"
          />
        </li>
        <li class="mt-3 text-center text-white-50 ">
          <fa
            icon="calendar-days"
            size="lg"
          />
        </li>
        <li class="mt-3 text-center text-white-50 ">
          <fa
            icon="file"
            size="lg"
          />
        </li>
        <li class="mt-3 text-center text-white-50 ">
          <fa
            icon="clipboard"
            size="lg"
          />
        </li>
        <li class="mt-3 text-center text-white-50 ">
          <fa
            icon="download"
            size="lg"
          />
        </li>
        <li class="mt-3 text-center text-white-50 ">
          <fa
            icon="folder"
            size="lg"
          />
        </li>
        <li class="mt-3 text-center text-white-50 ">
          <fa
            icon="money-bill"
            size="lg"
          />
        </li>
        <li class="mt-3 text-center text-white-50 ">
          <fa
            icon="key"
            size="lg"
          />
        </li>
      </ul>
    </aside>
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  position: fixed;
  padding-top: 1rem;
  left: 0;
  top: 3.5rem;
  bottom: 0;
  width: 50px;
}

.content {
  margin-left: 50px;
}
</style>
