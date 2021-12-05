import React from 'react'
import './Socials.scss'
import SocialCard from './SocialCard'

import { ReactComponent as DiscordIcon } from '../../assets/images/Discord-Logo-White.svg'
import { ReactComponent as SteamIcon } from '../../assets/images/Steam-Logo.svg'
import { ReactComponent as RiotGamesIcon } from '../../assets/images/Riot_Games-Logo.svg'

const colors = {
  discord: '#5865F2',
  steam: '#000000',
  riotgames: '#d13639'
}

const Socials = () => {
  return (
    <div className="socials">
      <SocialCard
        icon={<DiscordIcon width="32" height="32" />}
        label={{ name: 'hana', subname: '#0001' }}
        color={colors.discord}
      />
      <SocialCard
        icon={<SteamIcon width="32" height="32" />}
        label={{ name: 'hanabanana' }}
        color={colors.steam}
      />
      <SocialCard
        icon={<RiotGamesIcon width="32" height="32" />}
        label={{ name: 'joemama', subname: '#001' }}
        color={colors.riotgames}
      />
    </div>
  )
}

export default Socials
