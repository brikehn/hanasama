import React from 'react'
import './Socials.scss'
import SocialCard from './SocialCard'

import { ReactComponent as DiscordIcon } from '../../assets/images/Discord-Logo-White.svg'
import { ReactComponent as SteamIcon } from '../../assets/images/Steam-Logo.svg'
import { ReactComponent as RiotGamesIcon } from '../../assets/images/Riot_Games-Logo.svg'
import { ReactComponent as SpotifyIcon } from '../../assets/images/Spotify-Logo.svg'

const colors = {
  discord: '#5865F2',
  steam: '#000000',
  riotgames: '#d13639',
  spotify: '#191414'
}

const Socials = () => {
  return (
    <div className="socials">
      <SocialCard
        icon={<DiscordIcon width="32" height="32" />}
        label={{ name: 'hana', subname: '#0001' }}
        color={colors.discord}
        link="discord:///users/244251015069564938"
      />
      <SocialCard
        icon={<SteamIcon width="32" height="32" />}
        label={{ name: 'hanabanana' }}
        color={colors.steam}
        link="steam://openurl/https://steamcommunity.com/id/hanasama96"
      />
      <SocialCard
        icon={<RiotGamesIcon width="32" height="32" />}
        label={{ name: 'joemama', subname: '#001' }}
        color={colors.riotgames}
      />
      <SocialCard
        icon={<SpotifyIcon width="32" height="32" />}
        label={{ name: 'hana' }}
        color={colors.spotify}
        link="spotify://user/1sr15fcypw0cuw773o1pvgyuq"
      />
    </div>
  )
}

export default Socials
