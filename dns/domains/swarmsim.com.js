CLI_DEFAULTS({
	SWARMSIM_COM_SECRET1: null,
	SWARMSIM_COM_SECRET2: null,
})
D("swarmsim.com", REG, DnsProvider(DNS),
	DefaultTTL(1),
	CNAME(SWARMSIM_COM_SECRET1, "cname.vercel-dns.com."),
	CNAME(SWARMSIM_COM_SECRET2, "cname.vercel-dns.com."),
	CNAME("elm", "swarm-elm.netlify.com."),
	CNAME("mail", "ghs.google.com."),
	CNAME("math", "math-swarmsim-com.netlify.com."),
	CNAME("netlify-preprod", "swarmsim-preprod.netlify.app."),
	CNAME("netlify-www", "swarmsim-www.netlify.app."),
	CNAME("preprod", "swarmsim-preprod.netlify.app."),
	ALIAS("@", "apex-loadbalancer.netlify.com."),
	CNAME("www", "swarmsim-www.netlify.app."),
	MX("@", 5, "alt2.aspmx.l.google.com."),
	MX("@", 1, "aspmx.l.google.com."),
	MX("@", 5, "alt1.aspmx.l.google.com."),
	MX("@", 10, "alt4.aspmx.l.google.com."),
	MX("@", 10, "alt3.aspmx.l.google.com."),
	NS("ns.phx3.nearlyfreespeech.net", "ns.phx1.nearlyfreespeech.net."),
	NS("ns.phx5.nearlyfreespeech.net", "ns.phx1.nearlyfreespeech.net."),
	TXT("google._domainkey", "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgsAWn+X5jNHTPO6UayRLqFsSmzF5WmSh1Ov0bIUAu9JubTLcoUtX2a4yvdHj7PEGwGJ+ZpM7ja2f/emHY3yrBGDr3CrlM4DLOuwKmW0LrL8499FChnsgx7s3JhI5ln3+zgen+e0y7l6bM/bu40oiIkoxCSTyesoZ1aSO3bi4sOv7cxOcpvMgDHDHPQwt5dMlxYq4dmu/fco6RCl7EFhtUmCkpXLgDBigBCmTclKcXYOpLxxzd8npc83aLg+VPVWS0CfnahWgby1RcpFQ8H5ihtE/FGX+TNoxClVgy23v+lvkmIj9wszRi/msPL6hdVRSFp2O4kfETYPIw805mb+uGQIDAQAB"),
	TXT("@", "keybase-site-verification=6395O2FZ_laPKmseNXoS6K8_EH6ksLiSbZgHRTmB-HI"),
	TXT("@", "v=spf1 include:_spf.google.com ~all"),
	TXT("@", "google-site-verification=huueYzqrM57YM5ogbWfTfrgxMPOtLuwIBf6l82rGrjE"),

	// terraform handles others
	IGNORE("math2")
)
