import styled from "styled-components";

// 직접 정의
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
  }
}
