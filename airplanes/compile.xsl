<xsl:stylesheet version="1.0"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output
  method="xml"
  doctype-public="-//W3C//DTD SVG 1.1//EN"
  doctype-system="http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"/>

    <xsl:template match="/svgRoot">
      <svg>
        <defs>
       	  <xsl:copy-of select="*[local-name() = 'path']"/>
       	  <xsl:copy-of select="*[local-name() = 'g']"/>
        </defs>

        <xsl:apply-templates select="*[local-name() = 'g']" />
      </svg>
    </xsl:template>

    <xsl:template match="*[local-name() = 'g']" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use y="100" x="{position() * 100}" xlink:href="#{@id}" />
    </xsl:template>

</xsl:stylesheet>
