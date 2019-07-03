<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('toggleSidebar')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{ date | date('date') }}</span>
      </div>

      <div class="logo">
        <router-link to="/">
          CRM System
        </router-link>
      </div>

      <ul class="drop_call right hide-on-small-and-down">
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

              <md-menu-item @click="logout">
                <a class="black-text">
                  <i class="material-icons">exit_to_app</i> Выйти
                </a>
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
  .logo a {
    font-size: 24px;
    color: #000;
  }
</style>

<script>
  import { setInterval, clearInterval } from 'timers';
  export default {
    data: () => ({
      date: new Date(),
      interval: null,
    }),
    mounted() {
      this.interval = setInterval(() => {
        this.date = new Date()
      }, 1000)
    },
    methods: {
      logout() {
        this.$router.push('/login?message=logout');
      }
    },
    beforeDestroy() {
      clearInterval(this.interval);
    }
  }
</script>