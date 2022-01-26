import React from 'react'
import original from 'react95/dist/themes/original'
import { ThemeProvider } from 'styled-components'
import rainyDay from 'react95/dist/themes/rainyDay'
import vaporTeal from 'react95/dist/themes/vaporTeal'
import theSixtiesUSA from 'react95/dist/themes/theSixtiesUSA'
import olive from 'react95/dist/themes/olive'
import tokyoDark from 'react95/dist/themes/tokyoDark'
import rose from 'react95/dist/themes/rose'
import plum from 'react95/dist/themes/plum'
import matrix from 'react95/dist/themes/matrix'
import travel from 'react95/dist/themes/travel'
import aiee from 'react95/dist/themes/aiee'
import ash from 'react95/dist/themes/ash'
import azureOrange from 'react95/dist/themes/azureOrange'
import bee from 'react95/dist/themes/bee'
import blackAndWhite from 'react95/dist/themes/blackAndWhite'
import blue from 'react95/dist/themes/blue'
import brick from 'react95/dist/themes/brick'
import candy from 'react95/dist/themes/candy'
import cherry from 'react95/dist/themes/cherry'
import coldGray from 'react95/dist/themes/coldGray'
import counterStrike from 'react95/dist/themes/counterStrike'
import darkTeal from 'react95/dist/themes/darkTeal'
import denim from 'react95/dist/themes/denim'
import eggplant from 'react95/dist/themes/eggplant'
import fxDev from 'react95/dist/themes/fxDev'
import highContrast from 'react95/dist/themes/highContrast'
import honey from 'react95/dist/themes/honey'
import hotChocolate from 'react95/dist/themes/hotChocolate'
import hotdogStand from 'react95/dist/themes/hotdogStand'
import lilac from 'react95/dist/themes/lilac'
import lilacRoseDark from 'react95/dist/themes/lilacRoseDark'
import maple from 'react95/dist/themes/maple'
import marine from 'react95/dist/themes/marine'
import millenium from 'react95/dist/themes/millenium'
import modernDark from 'react95/dist/themes/modernDark'
import molecule from 'react95/dist/themes/molecule'
import ninjaTurtles from 'react95/dist/themes/ninjaTurtles'
import pamelaAnderson from 'react95/dist/themes/pamelaAnderson'
import polarized from 'react95/dist/themes/polarized'
import powerShell from 'react95/dist/themes/powerShell'
import raspberry from 'react95/dist/themes/raspberry'
import redWine from 'react95/dist/themes/redWine'
import seawater from 'react95/dist/themes/seawater'
import shelbiTeal from 'react95/dist/themes/shelbiTeal'
import slate from 'react95/dist/themes/slate'
import solarizedDark from 'react95/dist/themes/solarizedDark'
import solarizedLight from 'react95/dist/themes/solarizedLight'
import spruce from 'react95/dist/themes/spruce'
import stormClouds from 'react95/dist/themes/stormClouds'
import toner from 'react95/dist/themes/toner'
import tooSexy from 'react95/dist/themes/tooSexy'
import vermillion from 'react95/dist/themes/vermillion'
import violetDark from 'react95/dist/themes/violetDark'
import vistaesqueMidnight from 'react95/dist/themes/vistaesqueMidnight'
import water from 'react95/dist/themes/water'
import white from 'react95/dist/themes/white'
import windows1 from 'react95/dist/themes/windows1'
import wmii from 'react95/dist/themes/wmii'

export const Themes = {
  'original': original,
  'RainyDay': rainyDay,
  'Vapor Teal': vaporTeal,
  'The Sixties USA': theSixtiesUSA,
  'Olive': olive,
  'Tokyo Dark': tokyoDark,
  'Rose': rose,
  'Plum': plum,
  'Matrix': matrix,
  'Travel': travel,
  'Aiee': aiee,
  'Ash': ash,
  'Azure Orange': azureOrange,
  'Bee': bee,
  'Black And White': blackAndWhite,
  'Blue': blue,
  'Brick': brick,
  'Candy': candy,
  'Cherry': cherry,
  'Cold Gray': coldGray,
  'Counter Strike': counterStrike,
  'Dark Teal': darkTeal,
  'Denim': denim,
  'Eggplant': eggplant,
  'fxDev': fxDev,
  'High Contrast': highContrast,
  'Honey': honey,
  'Hot Chocolate': hotChocolate,
  'Hotdog Stand': hotdogStand,
  'Lilac': lilac,
  'Lilac Rose Dark': lilacRoseDark,
  'Maple': maple,
  'Marine': marine,
  'Millenium': millenium,
  'Modern Dark': modernDark,
  'Molecule': molecule,
  'Ninja Turtles': ninjaTurtles,
  'Pamela Anderson': pamelaAnderson,
  'Polarized': polarized,
  'Power Shell': powerShell,
  'Raspberry': raspberry,
  'Red Wine': redWine,
  'Seawater': seawater,
  'Shelbi Teal': shelbiTeal,
  'Slate': slate,
  'Solarized Dark': solarizedDark,
  'Solarized Light': solarizedLight,
  'Spruce': spruce,
  'Storm Clouds': stormClouds,
  'Toner': toner,
  'Too Sexy': tooSexy,
  'Vermillion': vermillion,
  'Violet Dark': violetDark,
  'Vistaesque Midnight': vistaesqueMidnight,
  'Water': water,
  'White': white,
  'Windows1': windows1,
  'Wmii': wmii,
}

export const Theme: React.FC<{ theme: any }> = ({ children, theme }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
