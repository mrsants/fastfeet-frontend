import styled from "styled-components";
import { Popover } from "@material-ui/core";

export const StyledPopover = styled(Popover)`
  .MuiPopover-paper {
    box-shadow: none !important;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 2px #00000026;
    opacity: 1;
    width: 150px;
    height: 120px;
    padding: 15px;
    display: flex;
    align-self: center;
    justify-content: space-between;
    flex-direction: column;

    hr {
      width: 130px;
      border: 1px solid #eeeeee;
      opacity: 1;
    }

    div {
      display: flex;
      align-items: center;

      span {
        text-align: left;
        letter-spacing: 0;
        color: #999999;
        opacity: 1;
        margin-left: 4px;
        cursor: pointer;
      }
    }
  }
`;
