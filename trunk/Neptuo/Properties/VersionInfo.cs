﻿using System;

namespace Neptuo
{
    public static class VersionInfo
    {
        internal const string Version = "3.3.8";

        public static Version GetVersion()
        {
            return new Version(Version);
        }
    }
}
