import React from "react"
import Switch from "react-switch"
import "./switch.css"

const SwitchDark = ({ theme }) => (
  <label className="switch-toggle" htmlFor="icon-switch">
    <Switch
      //   checkedIcon={<div className="icon checkedIcon"></div>}
      //   height={24}
      //   width={70}
      uncheckedIcon={
        <div className="icon uncheckedIcon">
          <span role="img" aria-label="dark-mode__moon">
            🌙
          </span>
        </div>
      }
      onChange={() =>
        theme.updateTheme(theme.name === "light" ? "dark" : "light")
      }
      checked={theme.name === "light"}
      offColor={"#aeb5b8"}
      offHandleColor={"#292e2e"}
      onColor={"#4fa6a1"}
      // onHandleColor={"#282c35"}

      // disabled
    />
  </label>
)
export default SwitchDark

// https://github.com/markusenglund/react-switch 를 참고하여 수정
