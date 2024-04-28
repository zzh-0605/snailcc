import { Stack } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { Raphael, parse, visualize } from "regulex-cjs";

const RegulexDiagram: React.FC<{ regex?: RegExp }> = ({ regex }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && regex) {
      const diagram = containerRef.current;
      const paper = new Raphael(diagram, 800, 400);

      try {
        visualize(parse(regex.source), getRegexFlags(regex), paper);
      } catch (e) {
        if (e instanceof SyntaxError) {
          logError(regex, e);
        } else {
          throw e;
        }
      }

      return () => {
        if (containerRef.current && paper) {
          paper.clear();
        }
      };
    }
  }, [regex, containerRef]);

  return (
    <Stack component="div" style={{ textAlign: "center" }}>
      <div ref={containerRef} />
    </Stack>
  );
};

function logError(re: RegExp, err: any) {
  var msg = ["Error:" + err.message, ""];
  if (typeof err.lastIndex === "number") {
    msg.push(re.source);
    msg.push(new Array(err.lastIndex).join("-") + "^");
  }
  console.log(msg.join("\n"));
}

function getRegexFlags(re: RegExp) {
  var flags = "";
  flags += re.ignoreCase ? "i" : "";
  flags += re.global ? "g" : "";
  flags += re.multiline ? "m" : "";
  return flags;
}

export default RegulexDiagram;
