D("warswarm.com", REG, DnsProvider(DNS),
	DefaultTTL(1),
	// CNAME("news", "swarm2.gitlab.io.", CF_PROXY_ON),
	// ALIAS("@", "swarm2.gitlab.io.", CF_PROXY_ON),
	// CNAME("www", "swarm2.gitlab.io.", CF_PROXY_ON),
	// MX("@", 10, "aspmx3.googlemail.com."),
	// MX("@", 10, "aspmx2.googlemail.com."),
	// MX("@", 5, "alt2.aspmx.l.google.com."),
	// MX("@", 5, "alt1.aspmx.l.google.com."),
	// MX("@", 1, "aspmx.l.google.com."),
	// TXT("_gitlab-pages-verification-code.news", "gitlab-pages-verification-code=b1526b6b76fee1a3e4011132006e147f"),
	// TXT("_gitlab-pages-verification-code", "gitlab-pages-verification-code=34cf09a9c3753672c11ad5d77e309ad8"),
	// TXT("_gitlab-pages-verification-code.www", "gitlab-pages-verification-code=5529cf46386c0540810a279d9f8ded47"),
	// TXT("@", "v=spf1 include:_spf.google.com ~all"),
	// TXT("@", "google-site-verification=NWIrk41nQoZVOUZmTwbbdYsrna6Ayg_QzFCc_ALd0uI")

	IGNORE("news"),
	IGNORE("@", "ALIAS"),
	IGNORE("@", "CNAME"),
	IGNORE("@", "A"),
	IGNORE("www")
)
