<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('toggleSidebar')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">12.12.12</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <md-menu>
            <md-button class="md-icon-button" md-menu-trigger>
              <md-icon>person</md-icon>
            </md-button>

            <md-menu-content>
              <md-menu-item>
                <router-link to="/profile" class="black-text">
                  <i class="material-icons">account_circle</i> Профиль
                </router-link>
              </md-menu-item>

              <md-menu-item>
                <router-link to="/logout" class="black-text">
                  <i class="material-icons">exit_to_app</i> Выйти
                </router-link>
              </md-menu-item>
            </md-menu-content>
          </md-menu>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
  .nav-wrapper .md-menu {
    display: flex;
  }
  .md-menu-content {
    z-index: 1003;
  }
</style>