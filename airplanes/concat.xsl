<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="xml"/>

    <xsl:template match="/">
    	<svgRoot>
    		<xsl:apply-templates select="/index/plane"/>							
    	</svgRoot>
    </xsl:template>

    <xsl:template match="plane">
    	<xsl:copy-of select="document(.)//*[local-name() = 'defs']/*"/>
    </xsl:template>

</xsl:stylesheet>
