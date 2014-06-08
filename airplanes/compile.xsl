<xsl:stylesheet version="1.0"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/svgRoot">
      <svg>
        <defs>
       	  <xsl:copy-of select="*[local-name() = 'path']"/>
       	  <xsl:copy-of select="*[local-name() = 'g']"/>
        </defs>
      </svg>
    </xsl:template>

    <!--xsl:template match="svg">
      <xsl:copy-of select="defs"/>
    </xsl:template-->

</xsl:stylesheet>
