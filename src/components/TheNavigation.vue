<template>
    <header class="header" id="header">
        <router-link 
          :to="{name: 'Home'}" 
          class="logo"
        >
            <img src="" alt="LOGO">
        </router-link>
        <div class="btn-hamburger">
            <div class="top bar"></div>
            <div class="middle bar"></div>
            <div class="bottom bar"></div>
        </div>
        <nav class="navbar">
            <ul>
                <li class="navbar-user">
                    <a href="#">
                      <img :src="currentUser.avatar" alt="" class="avatar-small">
                      <span>
                        {{currentUser.name}}
                        <img src="@/assets/img/farmer.svg" alt="" class="icon-profile">
                      </span>
                    </a>
                    <div id="user-dropdown">
                        <div class="triangle-drop"></div>
                        <ul class="dropdown-menu">
                            <li class="dropdown-menu-item"><a href="#">View profile</a></li>
                            <li class="dropdown-menu-item"><a href="#">Logout</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters({
            currentUser: 'authUser'
        })
    }
}
</script>