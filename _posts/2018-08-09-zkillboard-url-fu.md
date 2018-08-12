---
layout: post
title: zKillboard URL-fu
date: '2018-08-09T10:00:00.000Z'
author: sacah
tags:
- software
- zkillboard
- sacah
modified_time: '2018-08-09T10:00:00.000Z'
--- 
 
zKillboard is an amazing site that I enjoy browsing from time to time. Every now and then
I want to drill down into some specific data further and I always struggle to remember the URL-fu that zKillboard allows.
Forget no more, I thought I'd dig in and find as much as I could and document it for next time. 

thisisafold 

I gathered this from looking at the source code of zKillboard, and trying out some things on the site. One day, when I have some time, I'd
love to get the site running locally and have a dig into the database and how queries are constructed to get a better understanding
of how it hangs together, if anything here is wrong, or there is more, let me know. 

### Standalone URLs

Lets get some base standalone URLs out of the way first
<table>
  <tr>
    <th>URL</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/5b/">https://zkillboard.com/kills/5b/</a>
    </td>
    <td>Kills where the victims value is over 5b</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/10b/">https://zkillboard.com/kills/10b/</a>
    </td>
    <td>Kills where the victims value is over 10b</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/bigkills/">https://zkillboard.com/kills/bigkills/</a>
    </td>
    <td>Kills where the victim is in one of these groups: Carrier(547), Dreadnought(485), Force Auxiliary(1538), Freighter(513),
      Jump Freighter(902), Titan(30), Supercarrier(659), Capital Industrial Ship(883)</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/citadels/">https://zkillboard.com/kills/citadels/</a>
    </td>
    <td>Kills where the victim is in one of these groups: Citadel(1657), Engineering Complex(1404), Refinery(1406)</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/awox/">https://zkillboard.com/kills/awox/</a>
    </td>
    <td>Kills where an attacker is in the same corp/alliance as victim</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/t1/">https://zkillboard.com/kills/t1/</a>
    </td>
    <td>Kills where the victim is in one of these groups Combat Battlecruiser(419), Battleship(27), Capsule(29), Carrier(547),
      Cruiser(26), Destroyer(420), Frigate(25), Industrial(28), Industrial Command Ship(941), Mining Barge(463), Corvette(237),
      Shuttle(31)</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/t2/">https://zkillboard.com/kills/t2/</a>
    </td>
    <td>Kills where the victim is in one of these groups Assault Frigate(324), Black Ops(898), Combat Recon Ship(906), Command
      Ship(540), Covert Ops(830), Electronic Attack Ship(893), Exhumer(543), Interdictor(541), Force Recon Ship(833), Heavy
      Assault Cruiser(358), Heavy Interdiction Cruiser(894), Interceptor(831), Jump Freighter(902), Logistics(832), Marauder(900),
      Stealth Bomber(834), Deep Space Transport(380)</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/t3/">https://zkillboard.com/kills/t3/</a>
    </td>
    <td>Kills where the victim is in one of these groups Strategic Cruiser(963)</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/frigates/">https://zkillboard.com/kills/frigates/</a>
    </td>
    <td>Kills where the victim is in one of these groups Assault Frigate(324), Electronic Attack Ship(893), Frigate(25), Interceptor(831),
      Corvette(237)</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/destroyers/">https://zkillboard.com/kills/destroyers/</a>
    </td>
    <td>Kills where the victim is in one of these groups Destroyer(420), Interdictor(541)</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/cruisers/">https://zkillboard.com/kills/cruisers/</a>
    </td>
    <td>Kills where the victim is in one of these groups Combat Recon Ship(906), Cruiser(26), Force Recon Ship(833), Heavy Assault
      Cruiser(358), Heavy Interdiction Cruiser(894), Logistics(832), Strategic Cruiser(963)</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/battlecruisers/">https://zkillboard.com/kills/battlecruisers/</a>
    </td>
    <td>Kills where the victim is in one of these groups Combat Battlecruiser(419), Command Ship(540)</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/battleships/">https://zkillboard.com/kills/battleships/</a>
    </td>
    <td>Kills where the victim is in one of these groups Battleship(27), Black Ops(898), Marauder(900)</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/solo/">https://zkillboard.com/kills/solo/</a>
    </td>
    <td>Kills where only 1 attacker was involved, and the ship isn't a capsule (670) and group isn't Corvette(237), Shuttle(31)</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/capitals/">https://zkillboard.com/kills/capitals/</a>
    </td>
    <td>Kills where the victim is in one of these groups Carrier(547), Dreadnought(485), Force Auxiliary(1538)</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/freighters/">https://zkillboard.com/kills/freighters/</a>
    </td>
    <td>Kills where the victim is in one of these groups Freighter(513), Jump Freighter(902), Industrial Command Ship(941)</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/rorquals/">https://zkillboard.com/kills/rorquals/</a>
    </td>
    <td>Kills where the victim is in a Capital Industrial Ship(883)</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/supers/">https://zkillboard.com/kills/supers/</a>
    </td>
    <td>Kills where the victim is in one of these groups Titan(30), Supercarrier(659)</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/lowsec/">https://zkillboard.com/kills/lowsec/</a>
    </td>
    <td>Kills occuring in lowsec</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/highsec/">https://zkillboard.com/kills/highsec/</a>
    </td>
    <td>Kills occuring in highsec</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/nullsec/">https://zkillboard.com/kills/nullsec/</a>
    </td>
    <td>Kills occuring in nullsec</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/w-space/">https://zkillboard.com/kills/w-space/</a>
    </td>
    <td>Kills occuring in wormholes</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/ganked/">https://zkillboard.com/kills/ganked/</a>
    </td>
    <td>Kills where one or more of the attackers are in the same alliance as the victim</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/abyssal/">https://zkillboard.com/kills/abyssal/</a>
    </td>
    <td>Kills that occured in Abyssal space (systemID > 32000000)</td>
  </tr>
  <tr>
    <td>
      <a href="https://zkillboard.com/kills/abyssal1b/">https://zkillboard.com/kills/abyssal1b/</a>
    </td>
    <td>Kills that occured in Abyssal space (systemID > 32000000) and have an iskValue >= 1b</td>
  </tr>
</table>

That gives you a few quick URLs that might be of interest, and those are also available via the Menu dropdown in zKillboard,
so no needing to remember them. 

### URL Segments

Now lets take a look at the base URL segments zKillboard accepts. These are also stackable, more will be explained on this later:
<table>
  <tr>
    <th>URL Segment</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>system/%systemID%</td>
    <td>Killmails occuring in systemID
      <br/>(
      <a href="https://zkillboard.com/system/30000142/">https://zkillboard.com/system/30000142/</a>)</td>
  </tr>
  <tr>
    <td>character/%characterID%</td>
    <td>Killmails with characterID involved
      <br/>(
      <a href="https://zkillboard.com/character/96393303/">https://zkillboard.com/character/96393303/</a>)</td>
  </tr>
  <tr>
    <td>corporation/%corporationID%</td>
    <td>Killmails with someone from corporationID involved
      <br/>(
      <a href="https://zkillboard.com/corporation/1000181/">https://zkillboard.com/corporation/1000181/</a>)</td>
  </tr>
  <tr>
    <td>alliance/%allianceID%</td>
    <td>Killmails with someone from allianceID involved
      <br/>(
      <a href="https://zkillboard.com/alliance/99007498/">https://zkillboard.com/alliance/99007498/</a>)</td>
  </tr>
  <tr>
    <td>faction/%factionID%</td>
    <td>Killmails with someone aligned to a faction
      <br/>(
      <a href="https://zkillboard.com/faction/500004/">https://zkillboard.com/faction/500004/</a>)</td>
  </tr>
  <tr>
    <td>ship/%shipID%</td>
    <td>Killmails with shipID involved
      <br/>(
      <a href="https://zkillboard.com/ship/601/">https://zkillboard.com/ship/601/</a>)</td>
  </tr>
  <tr>
    <td>group/%groupID%</td>
    <td>Killmails with a ship from groupID involved
      <br/>(
      <a href="https://zkillboard.com/group/237/">https://zkillboard.com/group/237/</a>)</td>
  </tr>
  <tr>
    <td>region/%regionID%</td>
    <td>Killmails occuring in regionID
      <br/>(
      <a href="https://zkillboard.com/region/10000005/">https://zkillboard.com/region/10000005/</a>)</td>
  </tr>
  <tr>
    <td>location/%locationID%</td>
    <td>Killmails occuring at locationID, locations like asteroid belts, stargates etc
      <br/>(
      <a href="https://zkillboard.com/location/40031149/">https://zkillboard.com/location/40031149/</a>)</td>
  </tr>
  <tr>
    <td>constellation/%constellationID%</td>
    <td>Killmails occuring in constellationID
      <br/>(
      <a href="https://zkillboard.com/constellation/20000072/">https://zkillboard.com/constellation/20000072/</a>)</td>
  </tr>
</table>

Each one of those will help you drill down a bit into the enormous dataset of zKillboard. Taking them further, those are
also stackable, putting them together can help you drill down even further. The first segment in the URL is what the pages display 
will use. So if the base is something not player driven, like a system, region, constellation or location, there are only
kills, no losses. If the first segment is a character, any kill that player is involved in is a kill, and when they died,
that is a loss. You get the picture.

### Examples fo stacking segments

<table>
  <tr>
    <th>URL Segments</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>character/%characterID%/system/%systemID%</td>
    <td>Using Tenny Page from our character segment above. Lets filter for kills/losses occured just in systemID
      <br/>(
      <a href="https://zkillboard.com/character/96393303/system/30002813/">https://zkillboard.com/character/96393303/system/30002813/</a>)</td>
  </tr>
  <tr>
    <td>group/%groupID%/system/%systemID%</td>
    <td>Using the Corvette (237) group of ships from our group segment above. Lets filter for kills/losses occuring just in systemID
      <br/>(
      <a href="https://zkillboard.com/group/237/system/30002813/">https://zkillboard.com/group/237/system/30002813/</a>) Notice we still see kills/losses as if the victim is a ship
      in groupID, it will be shown as a loss, if one of the attackers is flying a ship in groupID it will be shown as a kill.</td>
  </tr>
  <tr>
    <td>system/%systemID%/group/%groupID%</td>
    <td>Now lets flip the segments so system is first
      <br/>(
      <a href="https://zkillboard.com/system/30002813/group/237/">https://zkillboard.com/system/30002813/group/237/</a>) Notice everything is a kill now, as system is the base segment,
      and a system can't be killed.</td>
  </tr>
</table>

### Segment Modifiers

With an understanding of the above segments, lets look at modifiers. These modifiers can go on any of the above segments.

<table>
  <tr>
    <th>URL Modifier Segment</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>iskValue/%iskValue%</td>
    <td>Show killmails where the loss value is greater than iskValue. Needs to be multiples of 5b else you'll get an error
      <br/>(
      <a href="https://zkillboard.com/system/30002813/iskValue/2500000000/">https://zkillboard.com/system/30002813/iskValue/2500000000/</a>)</td>
  </tr>
  <tr>
    <td>npc/%OnOff%</td>
    <td>Show killmails where the only attacker was an NPC, or excluding all kills by NPCs, based on a 0 (no NPCs) or 1 (just
      NPCs) for OnOff
      <br/>(
      <a href="https://zkillboard.com/system/30002813/npc/1/">https://zkillboard.com/system/30002813/npc/1/</a>)</td>
  </tr>
  <tr>
    <td>solo/</td>
    <td>Show killmails where only 1 attacker was involved
      <br/>(
      <a href="https://zkillboard.com/system/30002813/solo/">https://zkillboard.com/system/30002813/solo/</a>)</td>
  </tr>
  <tr>
    <td>kills/</td>
    <td>Using our Corvettes in Tama query above, lets filter to just ones where corvettes were on the attackers list
      <br/>(
      <a href="https://zkillboard.com/group/237/system/30002813/kills/">https://zkillboard.com/group/237/system/30002813/kills/</a>)</td>
  </tr>
  <tr>
    <td>losses/</td>
    <td>Flip of above, just where Corvettes died in Tama
      <br/>(
      <a href="https://zkillboard.com/group/237/system/30002813/losses/">https://zkillboard.com/group/237/system/30002813/losses/</a>)</td>
  </tr>
  <tr>
    <td>w-space/</td>
    <td>Show killmails involving Corvettes in wormholes
      <br/>(
      <a href="https://zkillboard.com/group/237/w-space/">https://zkillboard.com/group/237/w-space/</a>) This won't work too well coupled with a segment like system, region
      etc</td>
  </tr>
  <tr>
    <td>lowsec/</td>
    <td>Corvettes in lowsec
      <br/>(
      <a href="https://zkillboard.com/group/237/lowsec/">https://zkillboard.com/group/237/lowsec/</a>) This won't work too well coupled with a segment like system, region etc</td>
  </tr>
  <tr>
    <td>nullsec/</td>
    <td>Corvettes in nullsec
      <br/>(
      <a href="https://zkillboard.com/group/237/nullsec/">https://zkillboard.com/group/237/nullsec/</a>) This won't work too well coupled with a segment like system, region
      etc</td>
  </tr>
  <tr>
    <td>highsec/</td>
    <td>You guessed it, Corvettes in highsec
      <br/>(
      <a href="https://zkillboard.com/group/237/highsec/">https://zkillboard.com/group/237/highsec/</a>) This won't work too well coupled with a segment like system, region
      etc</td>
  </tr>
  <tr>
    <td>awox/</td>
    <td>Show killmails where the victim and one of the attackers are in the same alliance
      <br/>(
      <a href="https://zkillboard.com/group/237/awox/">https://zkillboard.com/group/237/awox/</a>)</td>
  </tr>
  <tr>
    <td>abyssal/</td>
    <td>Show killmails where a Vexor (626) died in Abyssal deadspace
      <br/>(
      <a href="https://zkillboard.com/ship/626/abyssal/">https://zkillboard.com/ship/626/abyssal/</a>)</td>
  </tr>
  <tr>
    <td>ganked/</td>
    <td>Show killmails where Vexors were involved and the attackers got concorded after
      <br/>(
      <a href="https://zkillboard.com/ship/626/ganked/">https://zkillboard.com/ship/626/ganked/</a>)</td>
  </tr>
  <tr>
    <td>stats/</td>
    <td>Show tabular data of kills/losses. As our base segment is a Vexor (Cruiser group) you will notice the only loss colum
      is the cruier. And all the kill numbers are ones involving a Vexor on the attackers list
      <br/>(
      <a href="https://zkillboard.com/ship/626/stats/">https://zkillboard.com/ship/626/stats/</a>)</td>
  </tr>
  <tr>
    <td>top/</td>
    <td>For the current month, top player, corp &amp; alliance for the base segment. This modifier is more focused on base segments
      that involve multiple pilots, rather than the character segment.
      <br/>(
      <a href="https://zkillboard.com/system/30002813/top/">https://zkillboard.com/system/30002813/top/</a>)</td>
  </tr>
  <tr>
    <td>topalltime/</td>
    <td>All time top player, corp &amp;amp; alliance for the base segment. This modifier is more focused on base segments that
      involve multiple pilots, rather than the character segment.
      <br/>(
      <a href="https://zkillboard.com/system/30002813/topalltime/">https://zkillboard.com/system/30002813/topalltime/</a>)</td>
  </tr>
  <tr>
    <td>ranks/</td>
    <td>Tabular data showing who is ~20 points +- the base segments ranking. The ranking can also be seen top right of the details
      page 'Alltime Rank' &amp; 'Recent Rank'. This modifier is more focused on player base segments, rather than system,
      location etc.
      <br/>(
      <a href="https://zkillboard.com/character/96393303/ranks/">https://zkillboard.com/character/96393303/ranks/</a>)</td>
  </tr>
</table>

There are also a few modifiers that only work on limited segments.

<table>
  <tr>
    <th>URL Segment</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>finalblow-only/</td>
    <td>limits results to only kms where the character landed the final blow. Use it on the character/%characterID% segment.</td>
  </tr>
  <tr>
    <td>corpstats/</td>
    <td>Tabular data on all corps in alliance and details around kills/losses. Use it on the alliance/%allianceID% segment.</td>
  </tr>
</table>

### The reset/ modifier

reset/ is an interesting one, usually each new segment you add filters the data more, so if you looked for /alliance/%allianceID%/corporation/%corporationID%/ it would find a victim who was in allianceID AND corporationID, or an attacker who was in allianceID AND corporationID. 

If you'd like to find a victim from allianceID and an attacker from corporationID, or vice versa, you can use /reset/. It acts like an 'involved' rather than an 'and' between segments. 

<table>
  <tr>
    <th>URL</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://zkillboard.com/alliance/1354830081/">https://zkillboard.com/alliance/1354830081/</a></td>
    <td>Shows all the kills/losses for the Goonswarm Federation.</td>
  </tr>
  <tr>
    <td><a href="https://zkillboard.com/corporation/1060620511/">https://zkillboard.com/corporation/1060620511/</a></td>
    <td>Shows all the kills/losses for the Galactic Rangers corp, in ChaosTheory alliance.</td>
  </tr>
  <tr>
    <td><a href="https://zkillboard.com/alliance/1354830081/reset/corporation/1060620511/">https://zkillboard.com/alliance/1354830081/reset/corporation/1060620511/</a></td>
    <td>Combine with a reset/ in between shows kills where the victim was in Goons and the
attackers were in Galactic Rangers, or where the victim was in Galactic Rangers and attackers in Goons.</td>
  </tr>
</table>

Understanding reset/ full would require I get this running locally to see how it forms the query, from what I can tell, you can't use the same segment type on either side, unfortunatly, so comparing 2 alliances doesn't work, comparing 2 characters doesn't work.

Hope that gave you some insights into how to better use zKillboard, if you know any more, or find anything wrong, please leave a comment below.

